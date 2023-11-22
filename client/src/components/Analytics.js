import React from 'react'
import { Progress } from 'antd'


const Analytics = ({ allTransactions }) => {

    //category
    const categories = ['salary', 'tip', 'food', 'movie', 'project', 'bills', 'medical', 'tax', 'fee', 'miscellaneous'];

    //total transactions
    const totalTransactions = allTransactions.length
    const totalIncomeTransactions = allTransactions.filter(transaction => transaction.type === 'income')
    const totalExpenseTransactions = allTransactions.filter(transaction => transaction.type === 'expense')
    const totalIncomePercent = (totalIncomeTransactions.length / totalTransactions) * 100
    const totalExpensePercent = (totalExpenseTransactions.length / totalTransactions) * 100

    //total turnover
    
    const totalIncomeTurnover = allTransactions.filter(
        transaction => transaction.type === 'income'
    ).reduce((acc, transaction) => acc + transaction.amount, 0)
    const totalExpenseTurnover = allTransactions.filter(
        transaction => transaction.type === 'expense'
    ).reduce((acc, transaction) => acc + transaction.amount, 0)
    const totalIncomeLeft = totalIncomeTurnover - totalExpenseTurnover;
    const totalIncomeLeftPercent = (totalIncomeLeft / totalIncomeTurnover) * 100;
   

    const IncomeProgress = () => {
        if ((totalIncomeTurnover === 0) || (totalIncomeTurnover < totalExpenseTurnover)) {
            return (
                <Progress type='circle'
                    status='exception'
                    className='mx-2'
                    percent={100}
                />
            )
        }
        if (totalIncomeLeftPercent >= 60) {
            return (
                <Progress type='circle'
                    strokeColor={'green'}
                    className='mx-5'
                    percent={totalIncomeLeftPercent.toFixed(0)}
                />
            )
        }
        else {
            if (totalIncomeLeftPercent > 25) {
                return (
                    <Progress type='circle'
                        strokeColor={'yellow'}
                        className='mx-2'
                        percent={totalIncomeLeftPercent.toFixed(0)}
                    />
                )
            }
            else {
                return (
                    <Progress type='circle'
                        strokeColor={'red'}
                        className='mx-2'
                        percent={totalIncomeLeftPercent.toFixed(0)}
                    />
                )
            }
        }

    }


    return (
        <>
            <div className="row m-3">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            Total Transactions : {totalTransactions}
                        </div>
                        <div className="card-body">
                            <h5 className='text-success'>
                                Income : {totalIncomeTransactions.length}
                            </h5>
                            <h5 className='text-danger'>
                                Expense : {totalExpenseTransactions.length}
                            </h5>
                            <div>
                                <Progress type='circle'
                                    strokeColor={'green'}
                                    className='mx-2'
                                    percent={totalIncomePercent.toFixed(0)}
                                />
                                <Progress type='circle'
                                    strokeColor={'red'}
                                    className='mx-2'
                                    percent={totalExpensePercent.toFixed(0)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            Net Balance : {totalIncomeLeft}
                        </div>
                        <div className="card-body">
                            <h5 className='text-success'>
                                Income : {totalIncomeTurnover}
                            </h5>
                            <h5 className='text-danger'>
                                Expense : {totalExpenseTurnover}
                            </h5>
                            <div className='text-center'>
                                <IncomeProgress />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row m-3">
                {/* Categorywise income */}
                <div className="col-md-4">
                    <h4>Categorywise Income</h4>
                    {
                        categories.map(category => {
                            const amount = allTransactions
                                .filter(
                                    (transaction) =>
                                        transaction.type === 'income' &&
                                        transaction.category === category
                                )
                                .reduce((acc, transaction) => acc + transaction.amount, 0)
                            return (
                                amount > 0 && (
                                    <div className="card m-4">
                                        <div className="card-body">
                                            <h5>
                                                {category}
                                            </h5>
                                            <Progress
                                                percent={((amount / totalIncomeTurnover) * 100).toFixed(0)}
                                            />
                                        </div>
                                    </div>
                                )
                            )
                        })
                    }
                </div>

                {/* categorywise expense */}
                <div className="col-md-4">
                    <h4>Categorywise Expense</h4>
                    {
                        categories.map(category => {
                            const amount = allTransactions
                                .filter(
                                    (transaction) =>
                                        transaction.type === 'expense' &&
                                        transaction.category === category
                                )
                                .reduce((acc, transaction) => acc + transaction.amount, 0)
                            return (
                                amount > 0 && (
                                    <div className="card m-4">
                                        <div className="card-body">
                                            <h5>
                                                {category}
                                            </h5>
                                            <Progress
                                                percent={((amount / totalExpenseTurnover) * 100).toFixed(0)}
                                            />
                                        </div>
                                    </div>
                                )
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Analytics
