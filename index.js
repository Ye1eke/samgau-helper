const { 
    Telegraf,
    Markup
} = require('telegraf')
require("dotenv").config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец' }! 👋`))
bot.help((ctx) => ctx.reply(text.commands))

bot.command('question', async (ctx) => {
    try { 
        await ctx.replyWithHTML('<b>Вопросы</b>', Markup.inlineKeyboard(
            [ 
                [Markup.button.callback('О ХОЛДИНГЕ', 'btn_1'), Markup.button.callback('КОМПЕТЕНЦИЯ', 'btn_2')],
                [Markup.button.callback('ДОСТИЖЕНИЯ', 'btn_3'), Markup.button.callback('ВАКАНСИИ', 'btn_4')]
            ]
        ))
    } catch(e) {
        console.error(e)
    }


})

function addAction(name, src, text) { 
    bot.action(name, async ctx => {
        try {
            await ctx.answerCbQuery()
            if(src !== false){
                await ctx.replyWithPhoto({
                    source: src
                })
            }
            await ctx.replyWithHTML(text, {
                disable_web_page_preview: true
            })
        } catch(e) {
            console.error(e)
        }
    })
}

addAction('btn_1', './img/1.jpg', text.text1)
addAction('btn_2', './img/2.jpg', text.text2)
addAction('btn_3', './img/3.jpg', text.text3)
addAction('btn_4', './img/4.jpg', text.text4)


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
