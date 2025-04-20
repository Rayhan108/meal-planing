/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react';
import { Input, Select, Rate, Form, Space, Card } from 'antd';


const { Option } = Select;

const FindMeals = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [meals, setMeals] = useState([
    {
      id: 1,
      name: 'Keto Chicken Salad',
      provider: 'HealthyMeals Inc.',
      rating: 4.5,
      description: 'A healthy, low-carb meal full of nutrients.',
    },
    {
      id: 2,
      name: 'Vegan Buddha Bowl',
      provider: 'Green Bites',
      rating: 4.8,
      description: 'A plant-based meal with a variety of fresh vegetables and grains.',
    },
    {
      id: 3,
      name: 'Gluten-Free Pasta',
      provider: 'Gluten Free Eats',
      rating: 4.0,
      description: 'Delicious gluten-free pasta with fresh tomato sauce and basil.',
    },
  ]); // Sample meals data
  const [filteredMeals, setFilteredMeals] = useState(meals);

  const onSearch = (values: any) => {
    const { preferences, rating, provider } = values;

    const filtered = meals.filter(meal => {
      const matchesPreferences = preferences ? meal.name.toLowerCase().includes(preferences.toLowerCase()) : true;
      const matchesProvider = provider ? meal.provider.toLowerCase().includes(provider.toLowerCase()) : true;
      const matchesRating = rating ? meal.rating >= rating : true;
      
      return matchesPreferences && matchesProvider && matchesRating;
    });

    setFilteredMeals(filtered);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#F37975]">
          Find Meals
        </h2>

        <Form onFinish={onSearch} layout="vertical" className="mb-12">
          <Form.Item
            label="Meal Preferences"
            name="preferences"
            rules={[{ message: 'Please input your meal preferences!' }]}
          >
            <Input placeholder="Enter your meal preference " />
          </Form.Item>

          <Form.Item label="Minimum Rating" name="rating">
            <Rate defaultValue={0} />
          </Form.Item>

          <Form.Item
            label="Meal Provider"
            name="provider"
            rules={[{ message: 'Please input the meal provider!' }]}
          >
            <Select placeholder="Select a meal provider" allowClear>
              <Option value="HealthyMeals Inc.">HealthyMeals Inc.</Option>
              <Option value="Green Bites">Green Bites</Option>
              <Option value="Gluten Free Eats">Gluten Free Eats</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Space direction="horizontal" size="middle" className="w-full">
              <button type="submit" className="w-full p-3 bg-[#F37975] rounded-sm text-white font-bold" >
                Search Meals
              </button>
            </Space>
          </Form.Item>
        </Form>

        <div className="meal-list">
          <h3 className="text-2xl font-bold mb-4">Search Results</h3>
          {filteredMeals.length > 0 ? (
            filteredMeals.map((meal) => (
              <Card key={meal.id} className="mb-6" hoverable>
                <Card.Meta title={meal.name} description={meal.provider} />
                <p className="mt-2">{meal.description}</p>
                <Rate disabled defaultValue={meal.rating} />
              </Card>
            ))
          ) : (
            <p>No meals found based on your search criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindMeals;
