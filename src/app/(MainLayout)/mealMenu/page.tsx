/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState } from 'react';
import { Form, Input, Button, Select, Upload, notification, Space } from 'antd';
import { UploadOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { RcFile } from 'antd/es/upload/interface';
import Image from 'next/image';

const { Option } = Select;

const PostMealMenu = () => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<string | null>(null);



  // Handle the form submission
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: any) => {
    console.log('Form values:', values);

    // Placeholder logic for handling form submission
    // Normally, you would send this data to your API route for storage
    // For now, we're just displaying a success notification
    notification.success({
      message: 'Meal Menu Posted',
      description: 'Your meal has been successfully added to the menu!',
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
    });

    // Simulate a delay for form submission
    setTimeout(() => {
      form.resetFields(); // Reset the form fields after successful submission
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-[#F37975]">Post Meal Menu</h2>

        <Form form={form} onFinish={handleSubmit} layout="vertical">
          {/* Meal Name */}
          <Form.Item label="Meal Name" name="mealName" rules={[{ required: true, message: 'Please input the meal name!' }]}>
            <Input placeholder="Enter meal name" />
          </Form.Item>

          {/* Meal Description */}
          <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please input a description!' }]}>
            <Input.TextArea placeholder="Enter meal description" rows={4} />
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

          {/* Image Upload */}
          <Form.Item label="Upload Meal Image" name="image">
            {/* <Upload
              beforeUpload={handleImageUpload}
              showUploadList={false}
              onChange={({ file }) => {
                if (file.status === 'done') {
                  setImageUrl(URL.createObjectURL(file.originFileObj)); // Display the image preview
                }
              }}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload> */}
            {/* {imageUrl && (
              <Image
                src={imageUrl}
                alt="meal-preview"
                style={{ width: '100%', marginTop: '10px' }}
              />
            )} */}
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
