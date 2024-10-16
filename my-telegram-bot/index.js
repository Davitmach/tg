const TelegramBot = require('node-telegram-bot-api');

// Укажите токен, полученный от BotFather
const token = '7725637136:AAGvJBDgs10Q-X7LVpxOrWXl7D4pl9gPUVU';
const webAppUrl = 'https://davitmach.github.io/tg/my-telegram-bot/'
// Создайте экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Реакция на команду /start
bot.onText(/\/start/, async (msg) => {
  const chatId = msg.chat.id;
  console.log(msg,'msg');
  
  
  
  bot.sendMessage(chatId, `Привет ${msg.chat.first_name}! Я ваш бот!`);
  await bot.sendMessage(chatId,'Щас кнопка будет', {
    reply_markup: {
      inline_keyboard:[
        [{text:'зАполнить',web_app: {url:webAppUrl}}]
      ]
    }
  })
});

// Ответ на любое сообщение
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Вы сказали: ${msg.text}`);
});


bot.onText(/\/app/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Вот ссылка на мое приложение: https://davitmach.github.io/tg/my-telegram-bot/');
});

bot.onText(/\/sendfile/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendDocument(chatId, './index.js');
});
