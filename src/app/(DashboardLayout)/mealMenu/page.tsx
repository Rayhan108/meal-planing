/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from 'react';
import { Form, Input, Button, Select, Upload, notification, Space } from 'antd';
import { UploadOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/es/upload/interface';
import Image from 'next/image';
import { useCreateMenuMutation } from '@/redux/feature/order/orderApi';
import toast from 'react-hot-toast';

const { Option } = Select;

const PostMealMenu = () => {
  const [form] = Form.useForm();


const [createMenu]=useCreateMenuMutation();

  // Handle the form submission
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any) => {
    console.log('Form values:', values);
    try{

      //   console.log("user info", userInfo);
        const res = await createMenu(values).unwrap();
          // console.log(res);
        toast.success(res?.message);
    
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   }catch(err :any){
      toast.error(err?.data?.message) 
      // console.log(err);
   }
  

    setTimeout(() => {
      form.resetFields(); 
    }, 1000);
  };

  return (
    <div className="min-h-screen w-full  flex items-center justify-center bg-gray-50">
      <div className="w-1/2  mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-[#F37975]">Post Meal Menu</h2>

        <Form form={form} onFinish={handleSubmit} layout="vertical">
          {/* Meal Name */}
          <Form.Item label="Meal Name" name="mealName" rules={[{ required: true, message: 'Please input the meal name!' }]}>
            <Input placeholder="Enter meal name" />
          </Form.Item>

     
          {/* availability */}
          <Form.Item label="Availability" name="availability" rules={[{ required: true, message: 'Please select this!' }]}>
            <Select placeholder="Select cuisine type" allowClear>
              <Option value="in stock">In Stock</Option>
              <Option value="out of stock">Out Of Stock</Option>
             
            </Select>
          </Form.Item>
          {/* Cuisine Type */}
          <Form.Item label="Cuisine Type" name="cuisineType" rules={[{ required: true, message: 'Please select the cuisine type!' }]}>
            <Select placeholder="Select cuisine type" allowClear>
              <Option value="italian">Italian</Option>
              <Option value="vegan">Vegan</Option>
              <Option value="indian">Indian</Option>
              <Option value="mexican">Mexican</Option>
              <Option value="chinese">Chinese</Option>
              <Option value="mediterranean">Mediterranean</Option>
            </Select>
          </Form.Item>

          {/* Price */}
          <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please input the meal price!' }]}>
            <Input placeholder="Enter price" type="number" />
          </Form.Item>



          {/* Submit Button */}
          <Form.Item>
            <Space direction="horizontal" size="middle" className="w-full">
              <Button type="primary" htmlType="submit" className="w-full">
                Post Meal
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default PostMealMenu;
