import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import TransactionDashboard from './TransactionDashboard'; // Create this component to display user data

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const user = JSON.parse(localStorage.getItem('user'));
        const res = await axios.post('/user/dashboard', { userId: user._id });
        setUserData(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <TransactionDashboard userData={userData} />
      )}
    </div>
  );
};

export default Dashboard;
