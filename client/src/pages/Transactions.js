import React, { useState, useEffect, useCallback } from 'react';
import { Form, Input, Select, Modal, message, Table, DatePicker, Popconfirm } from 'antd';
import { UnorderedListOutlined, AreaChartOutlined, EditOutlined, DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import styles from "../css/Transactions.module.css";
import Layout from "./../components/Layout/Layout";
import axios from 'axios';
import Spinner from '../components/Spinner';
import moment from 'moment';
import Analytics from '../components/Analytics';
import BarChart from '../components/Charts/BarChart';
import LineChart from '../components/Charts/LineChart';
import PieChart from '../components/Charts/PieChart';
import { useTheme } from '../components/Layout/Theme';



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
    const [openPopup, setOpenPopup] = useState(null)
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [viewMode, setViewMode] = useState('progress')
    
    //handling confirm for delete
    const handleOk = (record) => {
        setConfirmLoading(true);
        setTimeout(() => {
            handleDelete(record);
            setOpenPopup(null);
            setConfirmLoading(false);
        }, 2000);
    };
    // handling cancel button
    const handleCancel = () => {
        setOpenPopup(null);
        message.info('Cancelled Delete Operation')
    };

    //table data
    const columns = [
        {
            key: 1,
            title: 'Date',
            dataIndex: 'date',
            render: (text) => <span> {moment(text).format('DD-MM-YYYY')} </span>,
        },
        {
            key: 2,
            title: 'Amount',
            dataIndex: 'amount',
        },
        {
            key: 3,
            title: 'Type',
            dataIndex: 'type',
        },
        {
            key: 4,
            title: 'Category',
            dataIndex: 'category',
        },
        {
            key: 5,
            title: 'Reference',
            dataIndex: 'reference',
        },
        {
            key: 6,
            title: 'Actions',
            render: (text, record) => {


                return (
                    <div >
                        <EditOutlined
                            className='mx-2'
                            onClick={() => {
                                setEditable(record)
                                setShowModal(true)

                            }} />
                        <Popconfirm
                            open={openPopup && openPopup._id === record._id}
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
                                onClick={() => {
                                    setOpenPopup(record)
                                }} />
                        </Popconfirm>
                    </div >
                )
            }
        },
    ];

    const getAllTransaction = useCallback(async () => {
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
    }, [frequency, selectedDate, type]
    )
    //useEffect Hook for adding transactions
    useEffect(() => {

        getAllTransaction();
    }, [getAllTransaction]);


    //delete handler
    const handleDelete = async (record) => {
        try {
            setLoading(true)
            await axios.post("/transactions/delete-transaction", { transactionId: record._id })
            setLoading(false)
            message.success('Transaction Deleted')
            getAllTransaction();
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
            getAllTransaction();
        } catch (error) {
            setLoading(false)
            message.error('Failed to add transaction')
        }
    }

    // Render the appropriate chart based on the selected viewMode
    const renderChart = () => {
        switch (viewMode) {
            case 'progress':
                return <Analytics allTransactions={allTransactions} />;
            case 'barchart':
                return <BarChart allTransactions={allTransactions} />;
            case 'linechart':
                return <LineChart />;
            case 'piechart':
                return <PieChart />;

            default:
                return null; // or a default component if no match
        }
    };

    return (
        <Layout>
            {loading && <Spinner />}
            <div className='d-flex flex-column min-vh-100'>
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
                    {(viewData === 'analytics') && (

                        <div>
                            <h6>Select View-Mode</h6>
                            <Select value={viewMode} onChange={(values) => setViewMode(values)}>
                                <Select.Option value="progress">PROGRESS</Select.Option>
                                <Select.Option value="barchart">BAR CHART</Select.Option>
                                <Select.Option value="piechart">PIE CHART</Select.Option>
                                <Select.Option value="linechart">LINE CHART</Select.Option>
                            </Select>
                        </div>
                    )
                    }

                    <div>
                        <button className={`${styles.btn} ${styles['btn-primary']}`} onClick={() => setShowModal(true)}>Add New</button>
                    </div>

                </div>

                <div className={styles.content} >
                    {viewData === 'table' ?
                        <Table columns={columns} dataSource={allTransactions} />
                        : renderChart(viewMode)
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
            </div>
        </Layout>
    );
};

export default Transactions;
