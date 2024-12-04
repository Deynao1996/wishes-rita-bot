import mongoose from 'mongoose'
import { TRY_COUNT } from '../store/data.js'

const userSchema = new mongoose.Schema(
  {
    chatId: {
      type: String,
      required: true
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    userName: {
      type: String
    },
    wrongAnswers: {
      type: Number,
      default: 0
    },
    rightAnswers: {
      type: Number,
      default: 0
    },
    tryCount: {
      type: Number,
      default: TRY_COUNT
    },
    isFinished: {
      type: Boolean,
      default: false
    },
  },
  { timestamps: true }
)


export const User = mongoose.models?.User || mongoose.model('User', userSchema)