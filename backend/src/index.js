import app from './server.js';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './db/dbase.js';

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});