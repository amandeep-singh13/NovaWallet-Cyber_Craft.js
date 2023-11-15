import React,{useState} from 'react';
import {Form,Input,Select,Modal} from 'antd';
import styles from './Transactions.module.css';
import Layout from "./../components/Layouts/Layout";



const Transactions = () => {
    const [showModal,setShowModal] = useState(false);

    const handleSubmit = (values) => {
        console.log(values)
    }
  return (
    <Layout>
      <div className={styles.filters}>
        <div>range filters</div>
        <div>
          <button className={`${styles.btn} ${styles['btn-primary']}`} onClick= {( )=> setShowModal(true)}>Add New</button>
        </div>
      </div>

      <div className={styles.content}>
        <Modal title = "Add Transaction" open ={showModal} onCancel={()=> setShowModal(false)} footer={false}>
            <Form layout="vertical" onFinish={handleSubmit}>
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
                        <Select.Option value="project">project</Select.Option>
                        <Select.Option value="Bills">Bills</Select.Option>
                        <Select.Option value="tax">Tax</Select.Option>
                        <Select.Option value="fee">Fee</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Date" name="date">
                    <Input type="date"/>
                    
                </Form.Item>

                <Form.Item label="Refrence" name="reference">
                    <Input type="text"/>
                    
                </Form.Item>

                <Form.Item label="Description" name="description">
                    <Input type="text"/>
                    
                </Form.Item>
                <div className="d-flex justify-content-end" >
                    <button  type="submit" className="btn btn-primary">SAVE</button>
                </div>

           
           




            </Form>

        </Modal>
      </div>
    </Layout>
  );
};

export default Transactions;
