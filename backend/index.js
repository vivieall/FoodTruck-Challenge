const express = require('express');
const cors = require('cors');
const csv = require('csv-parser');
const fs = require('fs');
const results = [];

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/foodtrucks', (req, res) => {
    fs.createReadStream('../Mobile_Food_Facility_Permit.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        res.json(results);
      })
      .on('error', (error) => {
        console.error('Error reading the CSV file:', error);
        res.status(500).json({ error: 'Error reading CSV file' });
      });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));