const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id, "🎡 Premi il pulsante per girare la ruota!", {

reply_markup: {
inline_keyboard: [
[
{
text: "🎡 Gira la ruota",
web_app: { url: "https://ermenegildo660.github.io/ruota-fortuna/" }
}
]
]
}

});

});
