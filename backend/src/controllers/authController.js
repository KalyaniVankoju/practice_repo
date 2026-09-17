import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    // 1. Validate input
    if (!username || !password || !role) {
      return res.status(400).json({
        message: 'Username, password and role are required'
      });
    }

    // 2. Check if username already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(409).json({
        message: 'Username already exists'
      });
    }

    // 3. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Create user
    const user = await User.create({
      username,
      password: hashedPassword,
      role
    });

    // 5. Send response
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user._id,
        username: user.username,
        role: user.role
      }
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Server error'
    });
  }
};