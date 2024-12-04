import { User } from '../models/Models.js'
import { User as TUser } from '../types/types.js'

export function numberFromString(stringWithNumbers: string): number | null {
  const numbersArray: RegExpMatchArray | null = stringWithNumbers.match(/\d+/g)
  if (!numbersArray || numbersArray.length === 0) {
    return null
  }
  const numbersString: string = numbersArray.join('')
  const result: number = parseInt(numbersString, 10)
  return result
}

export async function decreaseUserTryCounter(user: TUser): Promise<void> {
  if (!user) return
  const chatId = user.chatId
  user.tryCount -= 1
  await User.findOneAndUpdate({ chatId }, user)
}

export async function increaseWrongAnswers(user: TUser): Promise<void> {
  if (!user) return
  const chatId = user.chatId
  user.wrongAnswers += 1
  await User.findOneAndUpdate({ chatId }, user)
}

export async function increaseRightAnswers(user: TUser): Promise<void> {
  if (!user) return
  const chatId = user.chatId
  user.rightAnswers += 1
  await User.findOneAndUpdate({ chatId }, user)
}

export async function finish(user: TUser): Promise<void> {
  if (!user) return
  const chatId = user.chatId
  user.isFinished = true
  await User.findOneAndUpdate({ chatId }, user)
}
