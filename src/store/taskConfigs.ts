import { TaskConfig } from '../types/types.js'
import { FEAR_CORRECT, HARM_CORRECT, MARKET_CORRECT, VINE_CORRECT, BOOKER_CORRECT, IMPORTANT_CORRECT, ATTENTION_CORRECT, HORIZON_CORRECT, CLOTHES_CORRECT, LIGHT_CORRECT, CELEBRATE_CORRECT, ASK_CORRECT, WORK_CORRECT, HEALTH_CORRECT, FAMILY_CORRECT, IDEAL_CORRECT } from './data.js'
import {
  fearOptions,
  vineOptions,
  startConversationOptions,
  startTestOptions,
  marketOptions,
  bookerOptions,
  importantOptions,
  attentionOptions,
  horizonOptions,
  clothesOptions,
  lightOptions,
  celebrateOptions,
  askOptions,
  workOptions,
  healthOptions,
  familyOptions,
  idealOptions
} from './options.js'

export const harmConfig: TaskConfig = {
  rightAnswer: HARM_CORRECT,
  currentOptions: startTestOptions,
  nextOptions: vineOptions,
  msgs: {
    right:
      "Мдаа, действительно. Ну хоть жива осталась! В следующий раз, может, варежки надеть? 😌🧤",
    next: "Каким способом лучше открыть закрытую бутылку с вином? 🍷"
  }
}

export const vineConfig: TaskConfig = {
  rightAnswer: VINE_CORRECT,
  currentOptions: vineOptions,
  nextOptions: fearOptions,
  msgs: {
    right:
      "Да! Ну это же очевидно. Какой ещё дурак использует другие способы… Хотя, может, это была ты в прошлом? 🤗",
    next: "Что или кто, находясь с тобой рядом, может заставить твое сердце биться чаще, вызывает беспокойство или страх?"
  }
}

export const fearConfig: TaskConfig = {
  rightAnswer: FEAR_CORRECT,
  currentOptions: fearOptions,
  nextOptions: marketOptions,
  msgs: {
    right: "Действительно. Меня, в своё время, одна собака за зад укусила. До сих пор вспоминаю это с лёгким ужасом и чуть меньшим стыдом. 😞🐾",
    next: 'Почему же, в конце концов, Конный Рынок - Конный? 🐎'
  }
}

export const marketConfig: TaskConfig = {
  rightAnswer: MARKET_CORRECT,
  currentOptions: marketOptions,
  nextOptions: bookerOptions,
  msgs: {
    right: "Очевидно. Теперь, проезжая мимо, можешь блеснуть знанием или даже поспорить с кем-то на желание. Удачи выигрывать! 😉",
    next: 'Чем бы ты занималась, если бы не работала бухгалтером?'
  }
}

export const bookerConfig: TaskConfig = {
  rightAnswer: BOOKER_CORRECT,
  currentOptions: bookerOptions,
  nextOptions: healthOptions,
  msgs: {
    right: "Не сомневался, что отгадаешь! Талант к точности и аккуратности видно за километр. 📦",
    next: 'Хочешь услышать моё пожелание? Тогда слушай внимательно!'
  }
}

export const healthConfig: TaskConfig = {
  rightAnswer: HEALTH_CORRECT,
  currentOptions: healthOptions,
  nextOptions: importantOptions,
  stickerId: 'CAACAgIAAxkBAAEvwptnUD0y2fOWHCj9DxB3C2NQhAQd8wACoBcAAt-0IEkggKwiuyDGyTYE',
  msgs: {
    right: "Пожелать тебе здоровья? Конечно, это было бы идеально, но мне кажется, тебе желали его все эти (сколько там тебе?) годы. Стресс, текущая ситуация, питание, образ жизни - весь современный ритм здоровья точно не прибавляет. Его ни у кого нет, и, откровенно говоря, особо и не предвидится. Все болеют, болели и будут болеть. Таковы вещи, так что переживать тут нечего.\nНо знаешь, чего я тебе точно пожелаю? Не унывать и не сдаваться, если вдруг какой-то недуг постучится в твои двери. Пусть никакие болезни или житейские трудности не смогут сломать тебя до конца. Надломить — ладно, жизнь у нас на это мастер. Но ты всегда должна вставать, отряхиваться и двигаться дальше, как бы сильно жизнь ни выдергивала из-под тебя ковер.\n\nТак что будь сильной, оставайся такой же несокрушимой! А если что, вспомни, что ты — настоящая бабулечка! И кто, как не ты, справится с любыми трудностями? 💪😉\n\nЧто же. А мы продолжаем!",
    next: 'Что самое важное для тебя среди этих занятий?'
  }
}

export const importantConfig: TaskConfig = {
  rightAnswer: IMPORTANT_CORRECT,
  currentOptions: importantOptions,
  nextOptions: attentionOptions,
  msgs: {
    right: "Ты сразу увидела правильный ответ. Тут вообще никаких сомнений — жизнь без ТикТока? Да ни за что! 😎📱",
    next: 'Каким способом лучше привлечь на себя внимание?'
  }
}

export const attentionConfig: TaskConfig = {
  rightAnswer: ATTENTION_CORRECT,
  currentOptions: attentionOptions,
  nextOptions: horizonOptions,
  msgs: {
    right: "Как один из вариантов. Да, сойдёт... хотя, может, стоило бы придумать что-то более эффектное? 😉",
    next: 'Любимая реалистичная телепередача для расширения кругозора? 🌍'
  }
}

export const horizonConfig: TaskConfig = {
  rightAnswer: HORIZON_CORRECT,
  currentOptions: horizonOptions,
  nextOptions: familyOptions,
  msgs: {
    right: "Ты сто процентов достала своих кукол-вуду и почувствовала правильный ответ. В следующий раз не забудь заклинания! 😇",
    next: 'Готова узнать, кто должен быть рядом?'
  }
}

export const familyConfig: TaskConfig = {
  rightAnswer: FAMILY_CORRECT,
  currentOptions: familyOptions,
  nextOptions: clothesOptions,
  stickerId: 'CAACAgIAAxkBAAEvwqlnUD5BtLc4Mb_CQlr55RcsZljHkgACrRgAAjBswUkwBaCmMh-HaDYE',
  msgs: {
    right: "Пусть всегда рядом с тобой будут только те, кто ценит тебя не за номера на машине, не за то, что ты можешь им дать, а просто за то, что ты есть. Даже если ты с утра выглядишь так, будто всю ночь употребляла алкогольные напитки и под конец полирнула Рэво или Балтикой 9. Пусть близкие люди всегда будут готовы поддержать тебя, выручить и напомнить, что жизнь не такая уж и плохая штука, даже когда тебе кажется иначе.\nА вот тем, кто пришёл в твою жизнь с корыстью, лживыми улыбками или желанием подпортить тебе настроение, — путь строго обратный. 🚪 Пусть они уходят быстрее, чем ты успеешь сказать 'До свидания!'\n\nЦени тех, с кем можешь быть самой собой — в пижаме, без макияжа, говоря на каком-то непонятном языке. Пусть дружба, семья в твоей жизни будут крепче чем крепеж от твоих номеров и на всю жизнь! 💪",
    next: 'Ну а это еще не конец! У меня к тебе еще есть пару вопросов 🤔\n\nКакой атрибут одежды подходит тебе лучше всех?'
  }
}

export const clothesConfig: TaskConfig = {
  rightAnswer: CLOTHES_CORRECT,
  currentOptions: clothesOptions,
  nextOptions: lightOptions,
  msgs: {
    right: "Абсолютно верно! Не могу оторвать от тебя глаз, одетую в эти перчатки! Просто стиль! 😋",
    next: 'Немного ПДД. При каком условии разрешен проезд запрещающего красного сигнала светофора? 🚦'
  }
}

export const lightConfig: TaskConfig = {
  rightAnswer: LIGHT_CORRECT,
  currentOptions: lightOptions,
  nextOptions: celebrateOptions,
  msgs: {
    right: "ПДД ты действительно знаешь хорошо. Будешь вскоре у меня принимать экзамен, а то в книге по ПДД все не правильно! 😛",
    next: 'Лучший способ отдохнуть бабуличкам в пятницу? 🥂'
  }
}

export const celebrateConfig: TaskConfig = {
  rightAnswer: CELEBRATE_CORRECT,
  currentOptions: celebrateOptions,
  nextOptions: askOptions,
  msgs: {
    right: "Уверенный ответ. Что ж, 2024 год на дворе, развлекаемся как можем! Мартини, музыка и немного легкого безумия — вот так и отдыхаем! 🙃",
    next: 'Как, грамматически правильно, попросить человека сходить набрать воды? 💧'
  }
}

export const askConfig: TaskConfig = {
  rightAnswer: ASK_CORRECT,
  currentOptions: askOptions,
  nextOptions: workOptions,
  msgs: {
    right: "Да, ну и что, главное, чтоб тебя поняли. Хотя, когда я так же начинаю говорить с Яной — она на меня как-то странно смотрит. Наверное, плохо училась в школе 😯",
    next: 'Каким способом лучше сделать вид, что ты работаешь, но на самом деле нет?'
  }
}

export const workConfig: TaskConfig = {
  rightAnswer: WORK_CORRECT,
  currentOptions: workOptions,
  nextOptions: idealOptions,
  msgs: {
    right: "Приавильно! Если быть специалистом - то и в ничегонеделаньи!",
    next: 'Ты готова услышать, насколько ты идеальна? 💯'
  }
}

export const idealConfig: TaskConfig = {
  rightAnswer: IDEAL_CORRECT,
  currentOptions: idealOptions,
  nextOptions: undefined,
  stickerId: 'CAACAgIAAxkBAAEvwrVnUD7veQqUzo-GBk5wXgx6pSiBBgACChUAAl_zwUl2NIzsRPf4fzYE',
  msgs: {
    right: "Будь собой. Да-да, просто такой, какая ты есть. Ты уникальна, и это не просто слова! С твоими плюшками и минусами, с тем, что есть, и с тем, чего нет — ты идеальна. Твои годы — не проблема, да и вообще, по большому счету это не так выжно\nТы — единственная, такой тебя на этой планете точно не было и не будет. Вот прям 100%. Цени себя, люби себя, не переживай за прошлое. Ошибки? Это просто опыт, чтобы понять, что делать дальше..\n\nДелай, как чувствуешь. Слушай своё сердце. Другие будут думать, что ты сошла с ума? Ну и что! Жизнь слишком коротка, чтобы быть кем-то другим. Ты совершенна, так что дай себе проявиться!\n\nНу а  мы прощаемся… Но жизнь-то продолжается! 😉",
    next: 'Вот и всё, с Днём Рождения! До новых встреч! 🥳'
  }
}



// export const authorConfig: TaskConfig = {
//   rightAnswer: FEAR_CORRECT,
//   currentOptions: fearOptions,
//   nextOptions: startConversationOptions,
//   msgs: {
//     right: "Congratulations! You've successfully completed all the tests.",
//     next: 'Prepare yourself to unveil the secret information. 🎉'
//   }
// }
