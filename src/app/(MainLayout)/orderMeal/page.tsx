/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from 'react';
import { Form, Input, Select, notification, Space, DatePicker, TimePicker } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import React from 'react';

import dayjs, { Dayjs } from 'dayjs';
import { useCreateOrderMutation, useGetMenuQuery } from '@/redux/feature/order/orderApi';
import toast from 'react-hot-toast';

const { Option } = Select;

const OrderMeal = () => {
  const [createOrder] = useCreateOrderMutation();
  const { data } = useGetMenuQuery(undefined);
  console.log(data);
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

  const onDeliveryDateChange = (date: Dayjs | null, dateString: string | string[]) => {
    if (Array.isArray(dateString)) {
      setDeliveryDate(dateString[0]);
    } else {
      setDeliveryDate(dateString);
    }
  };

  const onDeliveryTimeChange = (time: Dayjs | null, timeString: string | string[]) => {
    if (Array.isArray(timeString)) {
      setDeliveryTime(timeString[0]);
    } else {
      setDeliveryTime(timeString);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any) => {
    console.log('Order Details:', values);
    const info ={
      meal : values.meal,
      dietaryPreference:values.dietaryPreference
    }
    console.log(info);
    try {
      const res = await createOrder(info).unwrap();
      console.log(res);
      toast.success(res?.message);
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-[#F37975]">Order Your Meal</h2>

        <Form onFinish={handleSubmit} layout="vertical">
          {/* Meal Selection */}
          <Form.Item
            label="Select a Meal"
            name="meal"
            rules={[{ required: true, message: 'Please select a meal!' }]}
          >
            <Select placeholder="Select a meal" onChange={onMealChange}>
              {data?.data?.map((meal: { mealName: string }, idx: number) => (
                <Select.Option key={idx} value={meal.mealName}>
                  {meal.mealName}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          {/* Dietary Preference */}
          <Form.Item
            label="Dietary Preference"
            name="dietaryPreference"
            rules={[{ required: true, message: 'Please select your dietary preference!' }]}
          >
            <Select placeholder="Select dietary preference">
              <Option value="none">None</Option>
              <Option value="vegetarian">Vegetarian</Option>
              <Option value="vegan">Vegan</Option>
              <Option value="gluten-free">Gluten-Free</Option>
              <Option value="keto">Keto</Option>
              <Option value="halal">Halal</Option>
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

          <div className="flex justify-between gap-4">
            {/* Delivery Date */}
            <Form.Item
              label="Delivery Date"
              name="deliveryDate"
              rules={[{ required: true, message: 'Please select a delivery date!' }]}
              className="w-1/2"
            >
              <DatePicker
                onChange={onDeliveryDateChange}
                disabledDate={(current) => current && current.isBefore(dayjs(), 'day')}
                placeholder="Select delivery date"
                format="YYYY-MM-DD"
              />
            </Form.Item>

            {/* Delivery Time */}
            <Form.Item
              label="Delivery Time"
              name="deliveryTime"
              rules={[{ required: true, message: 'Please select a delivery time!' }]}
              className="w-1/2"
            >
              <TimePicker
                onChange={onDeliveryTimeChange}
                format="HH:mm"
                placeholder="Select delivery time"
              />
            </Form.Item>
          </div>

          {/* Submit Button */}
          <Form.Item>
            <Space direction="horizontal" size="middle" className="w-full">
              <button
                type="submit"
                className="w-full p-3 bg-[#F37975] rounded-sm text-white font-bold"
              >
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
