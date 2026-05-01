import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors({
   origin: 'http://localhost:5173', // Replace with your frontend URL
   credentials: true, // Allow cookies to be sent
}));

export default app;