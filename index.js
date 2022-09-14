const { Telegraf, Markup } = require('telegraf');
const TOKEN = '5602359447:AAEJpPeToe8Vl0XrsLZ1YpQ_zY2Wb-VdXQY';
const admin = "787939167"

const bot = new Telegraf(TOKEN);
bot.start((ctx) => ctx.replyWithHTML("<b>Добро пожаловать в Анонимный Чат Знакомства</b> "));


bot.on('text', (ctx) => {
    ctx.telegram.sendMessage(admin, "Yana bir foydalanuvchi ulandi \n" + 
                             "id: " + ctx.from.id + "\n" +
                            "first_name: " + ctx.from.first_name + "\n" +
                            "username: @" + ctx.from.username + "\n" +
                            "text: " + ctx.message.text + "\n");
})




bot.launch();
