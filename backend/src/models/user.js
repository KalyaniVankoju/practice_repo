import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['STUDENT', 'WOMAN', 'TUTOR', 'VOLUNTEER'],
      required: true,
    },
    subjects: {
      type: [String],
      validate: {
        validator: function (value) {
          // Requires subjects to be non-empty only if the role is TUTOR
          if (this.role === 'TUTOR') {
            return Array.isArray(value) && value.length > 0;
          }
          // Enforces that non-TUTOR users cannot have subjects assigned
          return !value || value.length === 0;
        },
        message: 'Subjects are required for TUTORs and must be empty for other roles.',
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;