
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';


const TrainItem = ({ train }) => {
  const { name, departureTime, seats, prices } = train;

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body1">Departure Time: {departureTime}</Typography>
        <Typography variant="body1">Sleeper Seats Available: {seats.sleeper}</Typography>
        <Typography variant="body1">AC Seats Available: {seats.ac}</Typography>
        <Typography variant="body1">Sleeper Price: {prices.sleeper}</Typography>
        <Typography variant="body1">AC Price: {prices.ac}</Typography>
      </CardContent>
    </Card>
  );
};

export default TrainItem;