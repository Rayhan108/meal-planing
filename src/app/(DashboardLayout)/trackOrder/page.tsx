/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Table, Tag, Button, notification } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { useGetmyOrdersQuery, useGetOrdersQuery } from '@/redux/feature/order/orderApi';

const TrackOrder = () => {
  const { data, isLoading } = useGetmyOrdersQuery(undefined);
  const orders = data?.data || [];
console.log(orders);
  const handleViewDetails = (orderId: number) => {
    notification.info({
      message: `Order ${orderId} Details`,
      description: `You are viewing the details of Order #${orderId}.`,
    });
  };

  const columns = [
    {
      title: 'Meal',
      dataIndex: 'meal',
      key: 'meal',
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
      title: 'Dietary Preferences',
      dataIndex: 'dietary',
      key: 'dietary',
      render: (dietary: string[]) => (
        <>
          {dietary?.map((pref, index) => (
            <Tag key={`${pref}-${index}`} color="blue">
              {pref}
            </Tag>
          ))}
        </>
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
    <div className="min-h-screen flex items-center justify-center ">
      <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-[#F37975]">Track Orders</h2>

        <Table
          dataSource={orders}
          columns={columns}
          rowKey="id"
          loading={isLoading}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </div>
  );
};

export default TrackOrder;
