const { 
    Telegraf,
    Markup
} = require('telegraf')
require("dotenv").config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(
    `Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец' }! 👋 
    \nМои команды: ${text.commands}`)
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
            
            if(name !== 'btn_5' && name !== 'btn_7' && 
            name !== 'btn_8' && name !== 'btn_9') {
                await ctx.replyWithHTML(text, {
                    disable_web_page_preview: true
                })
            }
            
            if(name === 'btn_5'){
                await ctx.reply('💰Учет и Оплата Рабочего Времени💰', Markup.inlineKeyboard(
                    [ 
                        [Markup.button.callback('Оплата Труда', 'btn_5_1')],
                        [Markup.button.callback('Внутренний Аутсорс', 'btn_5_2')],
                        [Markup.button.callback('Заранее Согласованное Отсутствие на Р...', 'btn_5_3')],
                        [Markup.button.callback('Удаленная Работа', 'btn_5_4')],
                        [Markup.button.callback('Учёт переработок для оплаты', 'btn_5_5')],
                    ]
                ))
            }

            if(name === 'btn_7'){
                await ctx.reply('🏖️Как Уйти в Отпуск🏖️', Markup.inlineKeyboard(
                    [ 
                        [Markup.button.callback('Как оформить ежегодный оплачивае...', 'btn_7_1')],
                        [Markup.button.callback('Как оформить отпуск без сохранения', 'btn_7_2')],
                        [Markup.button.callback('Отпуск в связи с беременностью и ро...', 'btn_7_3')],
                        [Markup.button.callback('Как получить компенсацию за неисп...', 'btn_7_4')],
                    ]
                ))
            }

            if(name === 'btn_8'){
                await ctx.reply('✅Корпоративные привилегии для сотрудников✅', Markup.inlineKeyboard(
                    [ 
                        [Markup.button.callback('Рабочие', 'btn_8_1')],
                        [Markup.button.callback('Обучающие', 'btn_8_2')],
                        [Markup.button.callback('Спортивные', 'btn_8_3')],
                        [Markup.button.callback('Развлекательные', 'btn_8_4')],
                    ]
                ))
            }

            if(name === 'btn_9'){
                await ctx.reply('👽FAQ о Жизни Компании👽', Markup.inlineKeyboard(
                    [ 
                        [Markup.button.callback('Инструменты Работы', 'btn_9_1')],
                        [Markup.button.callback('Наши Офисы', 'btn_9_2')],
                    ]
                ))
            }
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

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
