/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from 'react';
import { Form, Input, Select, notification, Space } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const OrderMeal = () => {
  const [meal, setMeal] = useState<string | undefined>();
  const [extras, setExtras] = useState<string[]>([]);
  const [dietary, setDietary] = useState<string[]>([]);

  const onMealChange = (value: string) => setMeal(value);
  const onExtrasChange = (value: string[]) => setExtras(value);
  const onDietaryChange = (value: string[]) => setDietary(value);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    console.log('Order Details:', values);

    notification.success({
      message: 'Order Placed',
      description: 'Your meal order has been successfully placed!',
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-[#F37975]">Order Your Meal</h2>

        <Form onFinish={handleSubmit} layout="vertical">
          {/* Meal Selection */}
          <Form.Item label="Select a Meal" name="meal" rules={[{ required: true, message: 'Please select a meal!' }]}>
            <Select placeholder="Select a meal" onChange={onMealChange}>
              <Option value="Keto Chicken Salad">Keto Chicken Salad</Option>
              <Option value="Vegan Buddha Bowl">Vegan Buddha Bowl</Option>
              <Option value="Gluten-Free Pasta">Gluten-Free Pasta</Option>
              <Option value="Family-Friendly Pizza">Family-Friendly Pizza</Option>
            </Select>
          </Form.Item>

      

          {/* Dietary Preferences */}
          <Form.Item label="Dietary Preferences" name="dietary">
            <Select
              mode="multiple"
              placeholder="Select dietary preferences"
              onChange={onDietaryChange}
            >
              <Option value="vegetarian">Vegetarian</Option>
              <Option value="vegan">Vegan</Option>
              <Option value="gluten_free">Gluten-Free</Option>
              <Option value="nut_free">Nut-Free</Option>
            </Select>
          </Form.Item>

      

  

          {/* Submit Button */}
          <Form.Item>
            <Space direction="horizontal" size="middle" className="w-full">
              <button type="submit" className="w-full p-3 bg-[#F37975] rounded-sm text-white font-bold">
                Place Order
              </button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default OrderMeal;
