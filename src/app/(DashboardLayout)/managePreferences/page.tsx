/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react';
import { Form, Input, Button, Select, Checkbox, Radio, Space, notification } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const ManagePreferences = () => {
  const [preferences, setPreferences] = useState<any>({});

  // Handle the form submission
  const handleSubmit = (values: any) => {
    console.log('Preferences:', values);

    // Show success notification after submitting the form
    notification.success({
      message: 'Preferences Saved',
      description: 'Your dietary preferences have been successfully saved!',
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
    });

    // Update state with the submitted preferences
    setPreferences(values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-[#F37975]">Manage Your Preferences</h2>

        <Form onFinish={handleSubmit} layout="vertical">
          {/* Dietary Restrictions */}
          <Form.Item label="Dietary Restrictions" name="dietaryRestrictions">
            <Checkbox.Group>
              <Space direction="vertical">
                <Checkbox value="vegan">Vegan</Checkbox>
                <Checkbox value="glutenFree">Gluten-Free</Checkbox>
                <Checkbox value="dairyFree">Dairy-Free</Checkbox>
                <Checkbox value="halal">Halal</Checkbox>
                <Checkbox value="kosher">Kosher</Checkbox>
              </Space>
            </Checkbox.Group>
          </Form.Item>

          {/* Preferred Cuisines */}
          <Form.Item label="Preferred Cuisines" name="preferredCuisines">
            <Select
              mode="multiple"
              placeholder="Select preferred cuisines"
              allowClear
            >
              <Option value="italian">Italian</Option>
              <Option value="indian">Indian</Option>
              <Option value="chinese">Chinese</Option>
              <Option value="mexican">Mexican</Option>
              <Option value="mediterranean">Mediterranean</Option>
              <Option value="american">American</Option>
            </Select>
          </Form.Item>

          {/* Portion Size */}
          <Form.Item label="Portion Size" name="portionSize">
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="small">Small</Radio>
                <Radio value="medium">Medium</Radio>
                <Radio value="large">Large</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
          <button type="submit" className="w-full p-3 bg-[#F37975] rounded-sm text-white font-bold" >
                Save preferences
              </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ManagePreferences;
