import TelegramBot from 'node-telegram-bot-api'

export const startTestOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Поехали 🚀',
          callback_data: '/start_test'
        }
      ]
    ]
  }
} as const

export const harmOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Нож 🔪',
          callback_data: '/harm_Knife'
        }
      ],
      [
        {
          text: 'Вилка 🍴',
          callback_data: '/harm_Fork'
        }
      ],
      [
        {
          text: 'Ложка 🥄',
          callback_data: '/harm_Spoon'
        }
      ],
      [
        {
          text: 'Карандаш ✏️',
          callback_data: '/harm_Pencil'
        }
      ]
    ]
  }
} as const

export const vineOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Используя штопор',
          callback_data: '/vine_Corkscrew'
        }
      ],
      [
        {
          text: 'Используя скрепки',
          callback_data: '/vine_Clips'
        }
      ],
      [
        {
          text: 'Используя шуруп',
          callback_data: '/vine_Skrew'
        }
      ],
      [
        {
          text: 'Втолкнуть пробку внутрь, чтобы облиться вином',
          callback_data: '/vine_Push'
        }
      ]
    ]
  }
} as const

export const fearOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Дима 🤵',
          callback_data: '/fear_Dmytro'
        }
      ],
      [
        {
          text: 'Собаки 🐕',
          callback_data: '/fear_Dog'
        }
      ],
      [
        {
          text: 'Недопитая тобой бутылка вина 🍾',
          callback_data: '/fear_Bottle'
        }
      ],
      [
        {
          text: 'Котята 🐱',
          callback_data: '/fear_Cat'
        }
      ]
    ]
  }
} as const

export const marketOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'На карнавалы люди одевались как лошади',
          callback_data: '/market_Clothes'
        }
      ],
      [
        {
          text: 'На праздники угощали людей кониной',
          callback_data: '/market_Dinner'
        }
      ],
      [
        {
          text: 'Была возможность за деньги оседлать лошадь',
          callback_data: '/market_Ride'
        }
      ],
      [
        {
          text: 'Там продавали лошадей',
          callback_data: '/market_Sell'
        }
      ]
    ]
  }
} as const

export const bookerOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Работала в такси 🚕',
          callback_data: '/booker_Taxi'
        }
      ],
      [
        {
          text: 'Дрессировала собак 🐶',
          callback_data: '/booker_Train'
        }
      ],
      [
        {
          text: 'Прятала бы закладки 💊',
          callback_data: '/booker_Meds'
        }
      ],
      [
        {
          text: 'Сама складывала праздничные коробочки 📦',
          callback_data: '/booker_Box'
        }
      ]
    ]
  }
} as const

export const healthOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Хочу поздравлений! 😈',
          callback_data: '/health_Talk'
        }
      ]
    ]
  }
} as const

export const importantOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Читать книги 📚',
          callback_data: '/important_Books'
        }
      ],
      [
        {
          text: 'Заниматься спортом ⚽',
          callback_data: '/important_Sport'
        }
      ],
      [
        {
          text: 'ТИКТОК! 🤪',
          callback_data: '/important_Tiktok'
        }
      ],
      [
        {
          text: 'Прогулки на свежем воздухе 🚶',
          callback_data: '/important_Walk'
        }
      ]
    ]
  }
} as const

export const attentionOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Пригласить на чашку кофе ☕',
          callback_data: '/attention_Coffee'
        }
      ],
      [
        {
          text: 'Самостоятельно отвалить Ютуб и восстановить его 🎥',
          callback_data: '/attention_Youtube'
        }
      ],
      [
        {
          text: 'Говорить комплименты 💬',
          callback_data: '/attention_Compliments'
        }
      ],
      [
        {
          text: 'Интересоваться как дела ❓',
          callback_data: '/attention_Interesting'
        }
      ]
    ]
  }
} as const

export const horizonOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Разрушители Легенд',
          callback_data: '/horizon_Busters'
        }
      ],
      [
        {
          text: 'Выжить любой ценой',
          callback_data: '/horizon_Survive'
        }
      ],
      [
        {
          text: 'В мире животных',
          callback_data: '/horizon_Animals'
        }
      ],
      [
        {
          text: 'Битва Экстрасенсов 🔮',
          callback_data: '/horizon_Mystic'
        }
      ]
    ]
  }
} as const

export const clothesOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Леопардовый свитер 🐆',
          callback_data: '/clothes_Top'
        }
      ],
      [
        {
          text: 'Темные джинсы 👖',
          callback_data: '/clothes_Pants'
        }
      ],
      [
        {
          text: 'Резиновые оранжевые перчатки',
          callback_data: '/clothes_Gloves'
        }
      ],
      [
        {
          text: 'Джинсовка',
          callback_data: '/clothes_Jeans'
        }
      ]
    ]
  }
} as const

export const familyOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Жду, не дождусь! 🤩',
          callback_data: '/family_Up'
        }
      ],

    ]
  }
} as const

export const idealOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Выкладывай! 💬',
          callback_data: '/ideal_Me'
        }
      ],

    ]
  }
} as const

export const lightOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Если водитель авто спешит за пивком под закрытие АТБ 🍺',
          callback_data: '/light_Atb'
        }
      ],
      [
        {
          text: 'Если транспортное средство красного цвета 🚗',
          callback_data: '/light_Red'
        }
      ],
      [
        {
          text: 'Если у водителя плохое зрение 👀',
          callback_data: '/light_Blind'
        }
      ],
      [
        {
          text: 'Если водитель первый день за рулем 🚙',
          callback_data: '/light_First'
        }
      ]
    ]
  }
} as const

export const celebrateOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Обсуждая соседей 🏡',
          callback_data: '/celebrate_Neighboar'
        }
      ],
      [
        {
          text: 'Попивая мартини, слушая музыку 🎶',
          callback_data: '/celebrate_Drink'
        }
      ],
      [
        {
          text: 'Активный отдых на улице 🌳',
          callback_data: '/celebrate_Relax'
        }
      ],
      [
        {
          text: 'Заниматься шитьем 🧵',
          callback_data: '/celebrate_Action'
        }
      ]
    ]
  }
} as const

export const askOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Dima, can I ask you to fill the water bottles?',
          callback_data: '/ask_Eng'
        }
      ],
      [
        {
          text: 'Діма, чи можу я попросити вас заповнити баклажки з водою?',
          callback_data: '/ask_Uk'
        }
      ],
      [
        {
          text: 'Дмитрий, не могли бы вы пройтись и набрать нам воды?',
          callback_data: '/ask_Rus'
        }
      ],
      [
        {
          text: 'Дима, сходыш набэрэш воды?',
          callback_data: '/ask_Mix'
        }
      ]
    ]
  }
} as const

export const workOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Листая вперед-назад документы в папке с умным лицом 📄',
          callback_data: '/work_Observe'
        }
      ],
      [
        {
          text: 'Искать что-то в интернете 🌐',
          callback_data: '/work_Internet'
        }
      ],
      [
        {
          text: 'Писать что-то на листе а4 ✍️',
          callback_data: '/work_Write'
        }
      ],
      [
        {
          text: 'Достать мобильный телефон 📱',
          callback_data: '/work_Phone'
        }
      ]
    ]
  }
} as const

export const againOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Try again',
          callback_data: '/again'
        }
      ]
    ]
  }
} as const

export const startConversationOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Unveil Secrets!',
          callback_data: '/next'
        }
      ]
    ]
  }
} as const

export const nextOptions: TelegramBot.SendMessageOptions = {
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: 'Next Secret',
          callback_data: '/next'
        }
      ]
    ]
  }
} as const
