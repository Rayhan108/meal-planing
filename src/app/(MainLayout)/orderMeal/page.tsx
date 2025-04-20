/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from 'react';
import { Form, Input, Button, Select, DatePicker, TimePicker, notification, Space } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import dayjs, { Dayjs } from 'dayjs'; // Import dayjs for handling date/time

const { Option } = Select;

const OrderMeal = () => {
  const [meal, setMeal] = useState<string | undefined>();
  const [extras, setExtras] = useState<string[]>([]);
  const [deliveryDate, setDeliveryDate] = useState<string | undefined>();
  const [deliveryTime, setDeliveryTime] = useState<string | undefined>();

  const onMealChange = (value: string) => {
    setMeal(value);
  };

  const onExtrasChange = (value: string[]) => {
    setExtras(value);
  };

  // Handle Date change
  const onDeliveryDateChange = (date: Dayjs | null, dateString: string | string[]) => {
    if (Array.isArray(dateString)) {
      setDeliveryDate(dateString[0]); // Take the first value if it's an array
    } else {
      setDeliveryDate(dateString); // If it's a string, set it directly
    }
  };

  // Handle Time change
  const onDeliveryTimeChange = (time: Dayjs | null, timeString: string | string[]) => {
    if (Array.isArray(timeString)) {
      setDeliveryTime(timeString[0]); // Take the first value if it's an array
    } else {
      setDeliveryTime(timeString); // If it's a string, set it directly
    }
  };

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

          {/* Meal Customization */}
          <Form.Item label="Customize Your Meal" name="extras">
            <Select
              mode="multiple"
              placeholder="Select extras (e.g., extra toppings, sauces)"
              onChange={onExtrasChange}
            >
              <Option value="extraCheese">Extra Cheese</Option>
              <Option value="spicySauce">Spicy Sauce</Option>
              <Option value="extraVegetables">Extra Vegetables</Option>
              <Option value="glutenFree">Gluten-Free</Option>
            </Select>
          </Form.Item>

          {/* Delivery Date */}
          <Form.Item label="Delivery Date" name="deliveryDate" rules={[{ required: true, message: 'Please select a delivery date!' }]}>
            <DatePicker
              onChange={onDeliveryDateChange}
              disabledDate={(current) => current && current.isBefore(dayjs(), 'day')} // Use Dayjs methods for comparison
              placeholder="Select delivery date"
              format="YYYY-MM-DD"
            />
          </Form.Item>

          {/* Delivery Time */}
          <Form.Item label="Delivery Time" name="deliveryTime" rules={[{ required: true, message: 'Please select a delivery time!' }]}>
            <TimePicker
              onChange={onDeliveryTimeChange}
              format="HH:mm"
              placeholder="Select delivery time"
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Space direction="horizontal" size="middle" className="w-full">
            <button type="submit" className="w-full p-3 bg-[#F37975] rounded-sm text-white font-bold" >
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
