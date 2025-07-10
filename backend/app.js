const express = require('express');
const cors = require('cors');
const formRoutes = require('./routes/formRoutes');
const { sequelize } = require('./config/db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/form', formRoutes);

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
console.log("USER:", process.env.DB_USER);
console.log("PASS:", process.env.DB_PASS);
