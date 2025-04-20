/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Form, Input, Button, Select, Switch, notification, Space } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const MealProviderProfile = () => {
  const [form] = Form.useForm();

  // Sample data, replace with actual data from your API or database
  const initialData = {
    name: 'HealthyMeals Inc.',
    cuisineSpecialties: ['Italian', 'Vegan'],
    priceRange: 'Medium',
    isAvailable: true, // Availability status (available or not)
  };

  const onFinish = (values: any) => {
    console.log('Form values:', values);

    // Show success notification after submitting the form
    notification.success({
      message: 'Profile Updated',
      description: 'Your meal provider profile has been successfully updated!',
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-[#F37975]">Meal Provider Profile</h2>

        <Form form={form} onFinish={onFinish} layout="vertical" initialValues={initialData}>
          {/* Provider Name */}
          <Form.Item label="Provider Name" name="name" rules={[{ required: true, message: 'Please input your provider name!' }]}>
            <Input placeholder="Enter provider name" />
          </Form.Item>

          {/* Cuisine Specialties */}
          <Form.Item label="Cuisine Specialties" name="cuisineSpecialties">
            <Select
              mode="multiple"
              placeholder="Select cuisine specialties"
              allowClear
              style={{ width: '100%' }}
            >
              <Option value="Italian">Italian</Option>
              <Option value="Vegan">Vegan</Option>
              <Option value="Indian">Indian</Option>
              <Option value="Mexican">Mexican</Option>
              <Option value="Chinese">Chinese</Option>
              <Option value="Mediterranean">Mediterranean</Option>
            </Select>
          </Form.Item>

          {/* Price Range */}
          <Form.Item label="Price Range" name="priceRange">
            <Select placeholder="Select price range" allowClear>
              <Option value="Low">Low</Option>
              <Option value="Medium">Medium</Option>
              <Option value="High">High</Option>
            </Select>
          </Form.Item>

          {/* Availability */}
          <Form.Item label="Meal Availability" name="isAvailable" valuePropName="checked">
            <Switch
              checkedChildren="Available"
              unCheckedChildren="Unavailable"
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Space direction="horizontal" size="middle" className="w-full">
              <Button type="primary" htmlType="submit" className="w-full">
                Save Changes
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default MealProviderProfile;
