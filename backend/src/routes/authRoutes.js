import express from 'express';
import { signup, login } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();
router.post('/register', signup);
router.post('/login', login);
router.get('/profile', protect, (req, res) => {
  res.json({
    message: 'You accessed a protected route',
    user: req.user
  });
});
export default router;