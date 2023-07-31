const express = require('express');
const axios = require('axios');

const app = express();
const port = 8008;

app.use(express.json());

app.get('/numbers', async (req, res) => {
  const urls = req.query.url;

  if (!urls) {
    return res.status(400).json({ error: 'No URLs provided' });
  }

  const validURLs = Array.isArray(urls) ? urls : [urls];

  try {
    const responses = await Promise.allSettled(validURLs.map(url => axios.get(url)));

    const numbers = responses
      .filter(response => response.status === 'fulfilled')
      .map(response => response.value.data.number)
      .flat()
      .filter((number, index, arr) => arr.indexOf(number) === index)
      .sort((a, b) => a - b);

    res.json({ number: numbers });
  } catch (error) {
    console.error('Error fetching numbers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Number Management Service is running on http://localhost:${port}`);
});