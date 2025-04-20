'use client'
import { useState } from 'react';
import { Table, Button, Tag, notification } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

const TrackOrders = () => {
  // Sample order data, replace with actual data from your API or database
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [orders, setOrders] = useState([
    {
      id: 1,
      meal: 'Keto Chicken Salad',
      provider: 'HealthyMeals Inc.',
      status: 'Ongoing',
      deliveryDate: '2023-10-15',
      deliveryTime: '12:00 PM',
    },
    {
      id: 2,
      meal: 'Vegan Buddha Bowl',
      provider: 'Green Bites',
      status: 'Completed',
      deliveryDate: '2023-09-30',
      deliveryTime: '1:30 PM',
    },
    {
      id: 3,
      meal: 'Gluten-Free Pasta',
      provider: 'Gluten Free Eats',
      status: 'Ongoing',
      deliveryDate: '2023-10-20',
      deliveryTime: '3:00 PM',
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
        const color = status === 'Ongoing' ? 'green' : 'volcano';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (_: any, record: any) => (
        <Button
          icon={<EyeOutlined />}
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
        <h2 className="text-3xl font-extrabold text-center mb-8 text-[#F37975]">Track Orders</h2>

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

export default TrackOrders;
