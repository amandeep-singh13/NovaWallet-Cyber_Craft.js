import React, { useState, useEffect } from 'react';
import { Form, Input, Select, Modal, message, Table, DatePicker, Popconfirm } from 'antd';
import { UnorderedListOutlined, AreaChartOutlined, EditOutlined, DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import styles from "../css/Transactions.module.css";
import Layout from "./../components/Layout/Layout";
import axios from 'axios';
import Spinner from '../components/Spinner';
import moment from 'moment';
import Analytics from '../components/Analytics';

const { RangePicker } = DatePicker;



const Transactions = () => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [allTransactions, setAllTransactions] = useState([]);
    const [frequency, setFrequency] = useState(['7']); //initially set to 7 days
    const [selectedDate, setSelectedDate] = useState([])
    const [type, setType] = useState('all')
    const [viewData, setViewData] = useState('table')
    const [editable, setEditable] = useState(null)
    const [openPopup, setOpenPopup] = useState(false)
    const [confirmLoading, setConfirmLoading] = useState(false);

    //showing popup for delete
    const showPopconfirm = () => {
        setOpenPopup(true);
    };
    //handling confirm for delete
    const handleOk =  (record) => {
        setConfirmLoading(true);
        setTimeout(() => {
            handleDelete(record);
            setOpenPopup(false);
            setConfirmLoading(false);
        }, 2000);
    };
    // handling cancel button
    const handleCancel = () => {
        setOpenPopup(false);
        message.info('Cancelled Delete Operation')
    };

    //table data
    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            render: (text) => <span> {moment(text).format('DD-MM-YYYY')} </span>,
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
        },
        {
            title: 'Type',
            dataIndex: 'type',
        },
        {
            title: 'Category',
            dataIndex: 'category',
        },
        {
            title: 'Reference',
            dataIndex: 'reference',
        },
        {
            title: 'Actions',
            render: (text, record) => (
                <div>
                    <EditOutlined
                        className='mx-2'
                        onClick={() => {
                            setEditable(record)
                            setShowModal(true)

                        }} />
                    <Popconfirm
                        open={openPopup}
                        title="Delete this transaction"
                        description="Are you sure you want to delete this transaction?"
                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        onConfirm={() => handleOk(record)}
                        okButtonProps={{
                            loading: confirmLoading,
                        }}
                        onCancel={() => handleCancel()}
                    >
                        <DeleteOutlined
                            className='text-danger mx-2'
                            onClick={showPopconfirm} />
                    </Popconfirm>
                </div>
            )
        },
    ];

    //useEffect Hook for adding transactions
    useEffect(() => {
        const getAllTransactions = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                setLoading(true);
                const res = await axios.post("/transactions/get-transaction",
                    {
                        userid: user._id,
                        frequency,
                        selectedDate,
                        type,
                    });
                setLoading(false)
                setAllTransactions(res.data)
                console.log(res.data)
            } catch (error) {
                console.log(error)
                message.error('Fetch Issue with Transaction Data')
            }
        }
        getAllTransactions();
    }, [frequency, selectedDate, type]);

    
    //delete handler
    const handleDelete = async (record) => {
            try {
                setLoading(true)
                await axios.post("/transactions/delete-transaction", { transactionId: record._id })
                setLoading(false)
                message.success('Transaction Deleted')
            } catch (error) {
                setLoading(false)
                setOpenPopup(false)
                console.log(error)
                message.error('Unable to Delete')
            }
    }

    //form handling
    const handleSubmit = async (values) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            setLoading(true)
            if (editable) {
                await axios.post('/transactions/edit-transaction', {
                    payload: {
                        ...values,
                        userId: user._id
                    },
                    transactionId: editable._id
                });
                setLoading(false)
                message.success('Transaction Updated Successfully')
            } else {
                await axios.post('/transactions/add-transaction', { ...values, userid: user._id })
                setLoading(false)
                message.success('Transaction Added Successfully')
            }
            setShowModal(false)
            setEditable(null)
        } catch (error) {
            setLoading(false)
            message.error('Failed to add transaction')
        }
    }
    return (
        <Layout>
            {loading && <Spinner />}
            <div className={styles.filters}>

                <div>
                    <h6>Select Frequency</h6>
                    <Select value={frequency} onChange={(values) => setFrequency(values)}>
                        <Select.Option value="7">Last 1 Week</Select.Option>
                        <Select.Option value="30">Last 1 Month</Select.Option>
                        <Select.Option value="365">Last 1 Year</Select.Option>
                        <Select.Option value="custom">Custom</Select.Option>
                    </Select>
                    {frequency === 'custom' && (
                        <RangePicker value={selectedDate}
                            onChange={(values) => setSelectedDate(values)}
                        />
                    )}
                </div>

                <div>
                    <h6>Select Type</h6>
                    <Select value={type} onChange={(values) => setType(values)}>
                        <Select.Option value="all">ALL</Select.Option>
                        <Select.Option value="income">INCOME</Select.Option>
                        <Select.Option value="expense">EXPENSE</Select.Option>

                    </Select>
                    {frequency === 'custom' && (
                        <RangePicker
                            value={selectedDate}
                            onChange={(values) => setSelectedDate(values)}
                        />
                    )}
                </div>

                <div className='switch-icons'>
                    <UnorderedListOutlined className={`mx-3 ${viewData === 'table' ? 'active-icon' : 'inactive-icon'}`} onClick={() => setViewData('table')} />
                    <AreaChartOutlined className={`mx-3 ${viewData === 'analytics' ? 'active-icon' : 'inactive-icon'}`} onClick={() => setViewData('analytics')} />
                </div>

                <div>
                    <button className={`${styles.btn} ${styles['btn-primary']}`} onClick={() => setShowModal(true)}>Add New</button>
                </div>

            </div>

            <div className={styles.content}>
                {viewData === 'table' ?
                    <Table columns={columns} dataSource={allTransactions} />
                    : <Analytics allTransactions={allTransactions} />
                }

            </div>
            <Modal
                title={editable ? 'Edit Transaction' : 'Add Transaction'}
                open={showModal}
                onCancel={() => setShowModal(false)}
                footer={false}>
                <Form layout="vertical"
                    onFinish={handleSubmit}
                    initialValues={editable}
                >
                    <Form.Item label="Amount" name="amount">
                        <Input type="text" />
                    </Form.Item>
                    <Form.Item label="type" name="type">
                        <Select>
                            <Select.Option value="income">Income</Select.Option>
                            <Select.Option value="expense">Expense</Select.Option>

                        </Select>
                    </Form.Item>

                    <Form.Item label="Category" name="category">
                        <Select>
                            <Select.Option value="salary">Salary</Select.Option>
                            <Select.Option value="tip">Tip</Select.Option>
                            <Select.Option value="food">Food</Select.Option>
                            <Select.Option value="movie">Movie</Select.Option>
                            <Select.Option value="project">Project</Select.Option>
                            <Select.Option value="bills">Bills</Select.Option>
                            <Select.Option value="medical">Medical</Select.Option>
                            <Select.Option value="tax">Tax</Select.Option>
                            <Select.Option value="fee">Fee</Select.Option>
                            <Select.Option value="miscellaneous">Miscllaneous</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Date" name="date">
                        <Input type="date" />

                    </Form.Item>

                    <Form.Item label="Refrence" name="reference">
                        <Input type="text" />

                    </Form.Item>

                    <Form.Item label="Description" name="description">
                        <Input type="text" />

                    </Form.Item>
                    <div className="d-flex justify-content-end" >
                        <button type="submit" className="btn btn-primary">SAVE</button>
                    </div>

                </Form>

            </Modal>
        </Layout>
    );
};

export default Transactions;
