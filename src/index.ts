import TelegramBot, { ChatId } from 'node-telegram-bot-api'
import { User as TUser } from './types/types.js'
import { TRY_COUNT, commands } from './store/data.js'
import { connectToDb } from './utils/connectToDB.js'
import { User } from './models/Models.js'
import {
  nextOptions,
  harmOptions,
  startTestOptions
} from './store/options.js'
import { greetingsArr, nextSequence } from './store/steps.js'
import Task from './task.js'
import {
  harmConfig,
  vineConfig,
  fearConfig,
  marketConfig,
  bookerConfig,
  importantConfig,
  attentionConfig,
  horizonConfig,
  clothesConfig,
  lightConfig,
  celebrateConfig,
  askConfig,
  workConfig,
  healthConfig,
  familyConfig,
  idealConfig
} from './store/taskConfigs.js'
import 'dotenv/config'
import { finish } from './utils/utils.js'

const kersArray = [
  {
    label: 'Класс',
    id: 'CAACAgIAAxkBAAEvwpNnUDxuDENG0UQVCnEfZ3lWtHp9FgACFBUAAuCUyEl75qEC_trvQjYE'
  },
  {
    label: 'LAugh',
    id: 'CAACAgIAAxkBAAEvwpNnUDxuDENG0UQVCnEfZ3lWtHp9FgACFBUAAuCUyEl75qEC_trvQjYE'
  },
  {
    label: 'NOOOO',
    id: 'CAACAgIAAxkBAAEvwplnUD0MBS6RXX7_nSpiOnSVnhdLiwAC6BgAAoCaGElH6JHLA5DZuTYE'
  },
  {
    label: 'BEEE-BOOO',
    id: 'CAACAgIAAxkBAAEvwptnUD0y2fOWHCj9DxB3C2NQhAQd8wACoBcAAt-0IEkggKwiuyDGyTYE'
  },
  {
    label: 'LOL',
    id: 'CAACAgIAAxkBAAEvwp1nUD1blJLaXg70wY0y1d5EMuGpHQACmxgAApd_GUmWaHhj5QhlhDYE'
  },
  {
    label: 'WHAT?',
    id: 'CAACAgIAAxkBAAEvwp9nUD2KC2XpRA8cagsInI-XyJ1OBAACYhgAAjx6UEnKFDnPOcbwvzYE'
  },
  {
    label: 'Dance',
    id: 'CAACAgIAAxkBAAEvwqNnUD2012r8HDCnzmYpFez-lQ4JfgACgBgAAsC2UEmimzNNrlDPPDYE'
  },
  {
    label: 'Check',
    id: 'CAACAgIAAxkBAAEvwqdnUD3pK7nhoJuRd-wgiC7nFSzXsQAC7hQAAuNVUEk4S4qtAhNhvDYE'
  },
  {
    label: 'WOW',
    id: 'CAACAgIAAxkBAAEvwqlnUD5BtLc4Mb_CQlr55RcsZljHkgACrRgAAjBswUkwBaCmMh-HaDYE'
  },
  {
    label: 'Banana',
    id: 'CAACAgIAAxkBAAEvwqtnUD502c5bS_bnyMFFpcILjMxOuQACqhYAApmkEUqpUt4Hkn-q5TYE'
  },
  {
    label: 'Music',
    id: 'CAACAgIAAxkBAAEvwrFnUD63Ilc2PWqfSshPw9HH1c1MsQAC6BYAAv2LEEra9hZZ9LdRQDYE'
  },
  {
    label: 'King go down',
    id: 'CAACAgIAAxkBAAEvwrVnUD7veQqUzo-GBk5wXgx6pSiBBgACChUAAl_zwUl2NIzsRPf4fzYE'
  },
  {
    label: 'Question',
    id: 'CAACAgIAAxkBAAEvwrdnUD8VC5feTPowpm1woMwP0ag8UwACwxMAAm3oEEqGY8B94dy6NDYE'
  },
]

class Bot {
  bot: TelegramBot
  user: TUser | null
  chats: Record<string, number>
  startTestOptions: TelegramBot.SendMessageOptions
  harmOptions: TelegramBot.SendMessageOptions
  nextOptions: TelegramBot.SendMessageOptions
  commands: TelegramBot.BotCommand[]
  stepsCounter: number
  isLastStep: boolean
  isGettingMessagesFromContact: boolean

  constructor() {
    this.bot = new TelegramBot(process.env.TOKEN, { polling: true })
    this.chats = {}
    this.user = null
    this.commands = commands
    this.startTestOptions = startTestOptions
    this.harmOptions = harmOptions
    this.nextOptions = nextOptions
    this.stepsCounter = 0
    this.isLastStep = false
    this.isGettingMessagesFromContact = false 
  }

  async startBot(chatId: ChatId): Promise<void> {
    this.stepsCounter = 0
    this.isLastStep = false
    await this.bot.sendSticker(
      chatId,
      'CAACAgIAAxkBAAEvs_ZnTFaqgUzr8_N6hda0wbGbM-OQzQACAhUAAjrBUEm3TJIJv-ioEzYE',
    )
    for (const [i, step] of greetingsArr.entries()) {
      const isLastMessage = i === greetingsArr.length - 1
      await this.bot.sendMessage(
        chatId,
        step,
        isLastMessage ? this.startTestOptions : undefined
      )
    }
    return
  }

  async handleUser(user: TUser): Promise<TUser> {
    const currentUser = await User.findOne({ chatId: user.chatId.toString() })
    if (!currentUser) {
      const newUser = await new User(user).save()
      return newUser
    }
    return currentUser
  }

  async handleInformation(chatId: ChatId): Promise<void> {
    if (!this.user) return
    const { rightAnswers, wrongAnswers } = this.user
    await this.bot.sendMessage(
      chatId,
      `К сожалению или к счастью, у тебя ${rightAnswers} правильных ответов и ${wrongAnswers} неправильных. Ну что, продолжим этот увлекательный путь? 😜`
    )
  }

  handleCallbacks(): void {
    this.bot.on('callback_query', async (msg) => {
      const data = msg.data

      if (!this.user || !data) return
      const chatId = this.user.chatId

      if (data === '/start_test')
        return this.bot.sendMessage(
          chatId,
          'Каким предметом только ты можешь поранить себе палец, просто взяв его в руки?',
          this.harmOptions
        )
      if (data.includes('harm'))
        return new Task({
          data,
          user: this.user,
          bot: this.bot,
          ...harmConfig
        }).on()
      if (data.includes('vine'))
        return new Task({
          data,
          user: this.user,
          bot: this.bot,
          ...vineConfig
        }).on()
      if (data.includes('fear'))
        return new Task({
          data,
          user: this.user,
          bot: this.bot,
          ...fearConfig
        }).on()
      if (data.includes('market'))
        return new Task({
          data,
          user: this.user,
          bot: this.bot,
          ...marketConfig
        }).on()
      if (data.includes('booker'))
        return new Task({
          data,
          user: this.user,
          bot: this.bot,
          ...bookerConfig
        }).on()
      if (data.includes('health'))
        return new Task({
          data,
          user: this.user,
          bot: this.bot,
          ...healthConfig
        }).on()
      if (data.includes('important'))
        return new Task({
          data,
          user: this.user,
          bot: this.bot,
          ...importantConfig
        }).on()
      if (data.includes('attention'))
        return new Task({
          data,
          user: this.user,
          bot: this.bot,
          ...attentionConfig
        }).on()
      if (data.includes('horizon'))
        return new Task({
          data,
          user: this.user,
          bot: this.bot,
          ...horizonConfig
        }).on()
      if (data.includes('clothes'))
        return new Task({
          data,
          user: this.user,
          bot: this.bot,
          ...clothesConfig
        }).on()
      if (data.includes('family'))
        return new Task({
          data,
          user: this.user,
          bot: this.bot,
          ...familyConfig
        }).on()
      if (data.includes('light'))
        return new Task({
          data,
          user: this.user,
          bot: this.bot,
          ...lightConfig
        }).on()
      if (data.includes('celebrate'))
        return new Task({
          data,
          user: this.user,
          bot: this.bot,
          ...celebrateConfig
        }).on()
      if (data.includes('ask'))
        return new Task({
          data,
          user: this.user,
          bot: this.bot,
          ...askConfig
        }).on()
      if (data.includes('work'))
        return new Task({
          data,
          user: this.user,
          bot: this.bot,
          ...workConfig
        }).on()
      if (data.includes('ideal'))
        await finish(this.user)
        return new Task({
          data,
          user: this.user,
          bot: this.bot,
          ...idealConfig
        }).on()
    })
  }

  handleMessages(): void {
    this.bot.on('message', async (msg) => {
      const textMessage = msg.text
      const { id: chatId, first_name, last_name, username } = msg.chat
      const defaultUser = {
        chatId,
        firstName: first_name || '',
        lastName: last_name || '',
        userName: username || '',
        tryCount: TRY_COUNT,
        rightAnswers: 0,
        wrongAnswers: 0,
        isFinished: false
      }

      console.log(textMessage)

      try {
        await connectToDb()
        this.user = await this.handleUser(defaultUser)

        if (textMessage === '/start') return this.startBot(chatId)

        if (textMessage === '/info') return this.handleInformation(chatId)
      } catch (error: any) {
        console.log(error.message)
        return this.bot.sendMessage(
          chatId,
          'Something went wrong, please try again'
        )
      }
    })
  }

  init(): void {
    try {
      this.bot.setMyCommands(this.commands)
      console.log('Telegram bot server is running...')
      this.handleMessages()
      this.handleCallbacks()
    } catch (error: any) {
      console.log(error.message)
    }
  }
}

const bot = new Bot()
bot.init()
