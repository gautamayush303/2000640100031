
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TrainItem from './TrainItem';
import moment from 'moment';
import jwt from 'jsonwebtoken';
import { useNavigate } from 'react-router-dom';

const API = 'http://20.244.56.144:80/';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const TrainSchedule = () => {
  const [trains, setTrains] = useState([]);
const [error,setError]= useState([]);
const navigate = useNavigate();

useEffect(() => {
  // Function to fetch train data from the API
  const fetchTrainData = async (token) => {
    try {
      const response = await axios.get(`${API}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
      });

      const data = response.data;
      if (Array.isArray(data)) {
        const now = moment();
        const filteredTrains = data.filter(
          (train) => moment(train.departureTime).diff(now, 'minutes') > 30
        );
        setTrains(filteredTrains);
        setError(null);
      } else {
        setError('Invalid data format from the API.');
      }
    } catch (error) {
      // Check if the error is due to an expired token
      if (error.response && error.response.status === 401) {
        setError('Your session has expired. Please log in again.');
        // Redirect to the login page when the token expires
        navigate('/login'); // Update '/login' with your actual login route
      } else {
        setError('Error fetching train data. Please try again later.');
      }
    }
  };

  // Assume you have the token stored in localStorage or any other storage mechanism
  const token = localStorage.getItem('accessToken');
  if (token) {
    try {
      const decodedToken = jwt.decode(token);
      if (decodedToken && decodedToken.exp * 1000 > Date.now()) {
        // Token is valid and not expired, fetch train data
        fetchTrainData(token);
      } else {
        setError('Your session has expired. Please log in again.');
        // Redirect to the login page when the token expires
        navigate('/login'); // Update '/login' with your actual login route
      }
    } catch (error) {
      setError('Error decoding token. Please log in again.');
      // Redirect to the login page if there's an issue with the token
      navigate('/login'); // Update '/login' with your actual login route
    }
  } else {
    setError('No token found. Please log in.');
    // Redirect to the login page if no token is found
    navigate('/login'); // Update '/login' with your actual login route
  }
}, [navigate]);


  // Sort trains based on the given criteria
  const sortedTrains = trains.slice().sort((a, b) => {
    // Ascending order of price (AC price)
    if (a.prices.ac !== b.prices.ac) {
      return a.prices.ac - b.prices.ac;
    }

    // Descending order of ticket availability (sum of AC and Sleeper seats)
    const totalSeatsA = a.seats.ac + a.seats.sleeper;
    const totalSeatsB = b.seats.ac + b.seats.sleeper;
    if (totalSeatsA !== totalSeatsB) {
      return totalSeatsB - totalSeatsA;
    }

    // Descending order of departure time (including delays)
    const delayedDepartureA = moment(a.departureTime).add(getRandomInt(0, 60), 'minutes');
    const delayedDepartureB = moment(b.departureTime).add(getRandomInt(0, 60), 'minutes');
    return delayedDepartureB - delayedDepartureA;
  });

  return (
    <div>
      <h2>Train Schedule</h2>
      {sortedTrains.map((train) => (
        <TrainItem key={train.id} train={train} />
      ))}
    </div>
  );
};

export default TrainSchedule;