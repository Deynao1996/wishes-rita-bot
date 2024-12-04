import TelegramBot, { ChatId } from 'node-telegram-bot-api'
import { TTask, User as TUser } from './types/types.js'
import { decreaseUserTryCounter, increaseRightAnswers, increaseWrongAnswers } from './utils/utils.js'
import { wrongAnswerMessages } from './store/data.js'

export default class Task {
  data: string
  user: TUser
  bot: TelegramBot
  chatId: ChatId
  currentOptions: TelegramBot.SendMessageOptions
  nextOptions?: TelegramBot.SendMessageOptions
  rightAnswer: string
  stickerId?: string
  msgs: { [key in 'right' | 'next']: string }
  constructor({
    data,
    user,
    bot,
    currentOptions,
    nextOptions,
    rightAnswer,
    msgs,
    stickerId
  }: TTask) {
    this.user = user
    this.data = data
    this.chatId = this.user.chatId
    this.bot = bot
    this.currentOptions = currentOptions
    this.nextOptions = nextOptions
    this.rightAnswer = rightAnswer
    this.msgs = msgs
    this.stickerId = stickerId
  }

  async guessedAnswer() {
    await this.bot.sendMessage(this.chatId, this.msgs.right)
    if (this.stickerId) {
      await this.bot.sendSticker(
        this.chatId,
        this.stickerId,
      )
    }
    await this.bot.sendMessage(this.chatId, this.msgs.next, this.nextOptions)
    await increaseRightAnswers(this.user)
  }

  async didNotGuessAnswer() {
    const {wrongAnswers} = this.user
    const currentMessage = wrongAnswerMessages[wrongAnswers % wrongAnswerMessages.length];
    await this.bot.sendMessage(
      this.chatId,
      currentMessage
    )
    await increaseWrongAnswers(this.user)
    // const isStillTry = this.user?.tryCount > 0
    // if (isStillTry)
    //   await this.bot.sendMessage(this.chatId, 'Try again!', this.currentOptions)
  }

  async on(): Promise<void> {
    const answer = this.data
    console.log(answer);
    
    if (!answer) return
    if (!this.user) return
    
    if (answer.includes(this.rightAnswer)) {
      await this.guessedAnswer()
    } else {
      await this.didNotGuessAnswer()
    }
  }
}
