/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react';
import { Table, Tag, Button, notification } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const ViewOrders = () => {
  // Sample order data, replace this with actual data from your API or database
  const [orders, setOrders] = useState([
    {
      id: 1,
      meal: 'Keto Chicken Salad',
      provider: 'HealthyMeals Inc.',
      status: 'Completed',
      deliveryDate: '2023-10-15',
      deliveryTime: '12:00 PM',
      preferences: ['Vegan', 'Gluten-Free'],
    },
    {
      id: 2,
      meal: 'Vegan Buddha Bowl',
      provider: 'Green Bites',
      status: 'Ongoing',
      deliveryDate: '2023-10-20',
      deliveryTime: '1:30 PM',
      preferences: ['Vegan', 'Dairy-Free'],
    },
    {
      id: 3,
      meal: 'Gluten-Free Pasta',
      provider: 'Gluten Free Eats',
      status: 'Completed',
      deliveryDate: '2023-09-30',
      deliveryTime: '2:00 PM',
      preferences: ['Gluten-Free'],
    },
  ]);

  const handleViewDetails = (orderId: number) => {
    // Show order details (for now, we'll just show a notification)
    notification.info({
      message: `Order ${orderId} Details`,
      description: `You are viewing the details of Order #${orderId}. Here you can display meal details, customization, and more.`,
    });
  };

  const columns = [
    {
      title: 'Meal',
      dataIndex: 'meal',
      key: 'meal',
    },
    {
      title: 'Provider',
      dataIndex: 'provider',
      key: 'provider',
    },
    {
      title: 'Delivery Date',
      dataIndex: 'deliveryDate',
      key: 'deliveryDate',
    },
    {
      title: 'Delivery Time',
      dataIndex: 'deliveryTime',
      key: 'deliveryTime',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
     const  color = status === 'Ongoing' ? 'green' : 'volcano';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'Preferences',
      dataIndex: 'preferences',
      key: 'preferences',
      render: (preferences: string[]) => (
        <div>
          {preferences.map((pref, index) => (
            <Tag key={index} color="blue">
              {pref}
            </Tag>
          ))}
        </div>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_: any, record: any) => (
        <Button
          icon={<CheckCircleOutlined />}
          onClick={() => handleViewDetails(record.id)}
        >
          View Details
        </Button>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-[#F37975]">View Orders</h2>

        <Table
          dataSource={orders}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />
      </div>
    </div>
  );
};

export default ViewOrders;
