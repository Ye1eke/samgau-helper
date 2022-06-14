const { 
    Telegraf,
    Markup
} = require('telegraf')
require("dotenv").config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(
    `Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец' }! 👋 
    \n\nМои команды: \n ${text.commands}`)
    )
bot.help((ctx) => ctx.reply(text.commands))

bot.command('guide', async (ctx) => {
    try { 
        await ctx.replyWithHTML('<b>Справочник</b>', Markup.inlineKeyboard(
            [ 
                [Markup.button.callback('🤠Наше Руководство🤠', 'btn_1')],
                [Markup.button.callback('💡Наша Идеология💡', 'btn_2')],
                [Markup.button.callback('🗓️Режим Работы🗓️', 'btn_3')],
                [Markup.button.callback('📌Внутренние Нормативные Документы📌', 'btn_4')],
                [Markup.button.callback('💰Учет и Оплата Рабочего Времени💰', 'btn_5')],
                [Markup.button.callback('🎫Правила Командирования Сотрудников🎫', 'btn_6')],
                [Markup.button.callback('🏖️Как Уйти в Отпуск🏖️', 'btn_7')],
                [Markup.button.callback('✅Корпоративные привилегии для сотрудников✅', 'btn_8')],
                [Markup.button.callback('👽FAQ о Жизни Компании👽', 'btn_9')],
            ]
        ))
    } catch(e) {
        console.error(e)
    }



})

function addAction(name, text) { 
    bot.action(name, async ctx => {
        try {
            await ctx.answerCbQuery()
            
            await ctx.replyWithHTML(text)
        } catch(e) {
            console.error(e)
        }
    })
}

addAction('btn_1', text.text1)
addAction('btn_2', text.text2)
addAction('btn_3', text.text3)
addAction('btn_4', text.text4)
addAction('btn_5', text.text5)
addAction('btn_6', text.text6)
addAction('btn_7', text.text7)
addAction('btn_8', text.text8)
addAction('btn_9', text.text9)

// function addAction(name, src, text) { 
//     bot.action(name, async ctx => {
//         try {
//             await ctx.answerCbQuery()
//             if(src !== false){
//                 await ctx.replyWithPhoto({
//                     source: src
//                 })
//             }
//             await ctx.replyWithHTML(text, {
//                 disable_web_page_preview: true
//             })
//         } catch(e) {
//             console.error(e)
//         }
//     })
// }




bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
