import app from './server.js';
import 'dotenv/config.js';
import connectDB from './db/dbase.js';

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});

import authRouter from './routes/auth.route.js';
app.use('/api/auth', authRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
})