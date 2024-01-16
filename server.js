const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

const connectionstring = "mongodb+srv://Gopika:sece2021@atlascluster.lec6whq.mongodb.net/Blackcoffer_assignment?retryWrites=true&w=majority";
mongoose.connect(connectionstring, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());

const DataSchema = new mongoose.Schema({
  end_year: { type: Number },
  intensity: { type: Number },
  sector: { type: String },
  // Other fields...
});

const DataModel = mongoose.model('data', DataSchema, 'data');

app.get('/api/data', async (req, res) => {
  try {
    const data = await DataModel.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
