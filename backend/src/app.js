import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import studentRoutes from './routes/studentRoutes.js';
import attendanceRoutes from './routes/attendanceRoutes.js';
import classRoutes from './routes/classRoutes.js';
dotenv.config();
import subjectRoutes from './routes/subjectRoutes.js';
const app = express();

app.use('/api/subjects', subjectRoutes);

app.use(cors());
app.use(express.json());
app.use('/api/students', studentRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/classes', classRoutes);
connectDB();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({
    message: 'Kalam Family backend is running'
  });
});
import authRoutes from './routes/authRoutes.js';
app.use('/api/auth', authRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
