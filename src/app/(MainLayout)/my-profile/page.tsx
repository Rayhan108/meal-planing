'use client'

import { Input, Form, Button, notification, Space } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';

const CustomerProfile = () => {
  const [form] = Form.useForm();

  // Dummy user data (you can replace this with data from your database)
  const userData = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "1234567890",
    address: "123 Main St, City, Country"
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFinish = (values: any) => {
    console.log('Form values:', values);
    notification.success({
      message: 'Profile Updated',
      description: 'Your profile has been successfully updated.',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-[#F37975]">Customer Profile</h2>

        <Form
          form={form}
          name="customerProfile"
          initialValues={userData}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: 'Please input your full name!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input prefix={<PhoneOutlined />} placeholder="Enter your phone number" />
          </Form.Item>

          <Form.Item
            label="Delivery Address"
            name="address"
            rules={[{ required: true, message: 'Please input your delivery address!' }]}
          >
            <div className="flex items-center">
           
              <Input.TextArea
              
                placeholder="Enter your delivery address"
                rows={4}
                defaultValue={userData.address} // Set default value if needed
              />
            </div>
          </Form.Item>

          <Form.Item>
            <Space direction="horizontal" size="middle" className="w-full">
              <button  type="submit" className="w-full bg-[#F37975] p-2 rounded-sm text-white font-bold">
                Save Changes
              </button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CustomerProfile;
