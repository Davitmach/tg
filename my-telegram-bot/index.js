const TelegramBot = require('node-telegram-bot-api');

// Укажите токен, полученный от BotFather
const token = '7725637136:AAGvJBDgs10Q-X7LVpxOrWXl7D4pl9gPUVU';

// Создайте экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Реакция на команду /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  console.log(msg,'msg');
  
  
  
  bot.sendMessage(chatId, 'Привет! Я ваш бот!');
});

// Ответ на любое сообщение
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Вы сказали: ${msg.text}`);
});
