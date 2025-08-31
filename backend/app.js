const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase');

// Load environment variables
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const products = require('./routes/product');
const orders = require('./routes/order');

const app = express();

// Database connection
connectDatabase();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1', products);
app.use('/api/v1', orders);

// ✅ Serve images with caching headers (1 year)
app.use(
  "/images",
  express.static(path.join(__dirname, "public/images"), {
    setHeaders: (res, filePath) => {
      if (/\.(png|jpg|jpeg|svg|gif)$/i.test(filePath)) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      }
    },
  })
);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT} in ${process.env.NODE_ENV}`);
});