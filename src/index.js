const express = require('express');
const cors = require('cors');
const v1 = require('./v1/routes');
const { PORT } = require('./config');
const { connectToDb } = require('./db/connectDb');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1', v1);

app.listen(PORT, async () => {
  console.log(`🚀 Server listening on port ${PORT}`);
  await connectToDb();
});

