/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react';
import { Table, Button, Tag, Modal, Form, Select, Input, notification, Space } from 'antd';
import { CheckCircleOutlined, CloseCircleOutlined, EditOutlined } from '@ant-design/icons';

const { Option } = Select;

const RespondToOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      meal: 'Keto Chicken Salad',
      provider: 'HealthyMeals Inc.',
      status: 'Pending',
      deliveryDate: '2023-10-15',
      deliveryTime: '12:00 PM',
      preferences: ['Vegan', 'Gluten-Free'],
    },
    {
      id: 2,
      meal: 'Vegan Buddha Bowl',
      provider: 'Green Bites',
      status: 'Pending',
      deliveryDate: '2023-10-20',
      deliveryTime: '1:30 PM',
      preferences: ['Vegan', 'Dairy-Free'],
    },
    {
      id: 3,
      meal: 'Gluten-Free Pasta',
      provider: 'Gluten Free Eats',
      status: 'Pending',
      deliveryDate: '2023-09-30',
      deliveryTime: '2:00 PM',
      preferences: ['Gluten-Free'],
    },
  ]);
  
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const showModal = (order: any) => {
    setSelectedOrder(order);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    notification.success({
      message: 'Order Accepted',
      description: `You have successfully accepted the order for ${selectedOrder.meal}`,
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    notification.error({
      message: 'Order Declined',
      description: `You have declined the order for ${selectedOrder.meal}`,
      icon: <CloseCircleOutlined style={{ color: '#ff4d4f' }} />,
    });
  };

  const handleModify = (values: any) => {
    setIsModalVisible(false);
    notification.info({
      message: 'Order Modified',
      description: `You have successfully modified the order for ${selectedOrder.meal}. New Portion: ${values.portionSize}`,
      icon: <EditOutlined style={{ color: '#1890ff' }} />,
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
        const color = status === 'Pending' ? 'orange' : 'green';
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
        <Space>
          <Button type="primary" onClick={() => showModal(record)}>
            Respond
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-center mb-8 text-[#F37975]">Respond to Orders</h2>

        <Table
          dataSource={orders}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 5 }}
        />

        {/* Modal for Accept, Decline, or Modify Order */}
        <Modal
          title="Respond to Order"
          visible={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Form onFinish={handleModify}>
            <Form.Item
              label="Portion Size"
              name="portionSize"
              initialValue="Medium"
              rules={[{ required: true, message: 'Please select a portion size!' }]}
            >
              <Select>
                <Option value="Small">Small</Option>
                <Option value="Medium">Medium</Option>
                <Option value="Large">Large</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Modify Order
              </Button>
            </Form.Item>

            <Form.Item>
              <button
                
                onClick={handleCancel}
                className="w-full p-3 bg-[#F37975] rounded-sm text-white font-bold"
              >
                Decline Order
              </button>
            </Form.Item>

            <Form.Item>
              <button
               
                onClick={handleOk}
                className="w-full p-3 bg-[#F37975] rounded-sm text-white font-bold"
              >
                Accept Order
              </button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default RespondToOrders;
