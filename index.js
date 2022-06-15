const { 
    Telegraf,
    Markup
} = require('telegraf')
require("dotenv").config()
const text = require('./const')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(
    `Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец' }! 👋 
    \nЧто бы легко ориентироваться \nу меня есть только 3 команды👇\n\nМои команды: ${text.commands}`)
    )
bot.help((ctx) => ctx.reply(`😲 В справочнике (/guide) есть 9 кнопок, если нашли свою тематику можете просто нажать и вам в тот же момент высветится ссылка либо несколько подчастей со ссылками.\n\nМои команды:${text.commands}`))

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
            
            if(name !== 'btn_1' && name !== 'btn_2' && name !== 'btn_2_1' && name !== 'btn_3' && name !== 'btn_4' && name !== 'btn_5' && name !== 'btn_6' && name !== 'btn_7' && 
            name !== 'btn_8' && name !== 'btn_9') {
                await ctx.replyWithHTML(text, {
                    disable_web_page_preview: true
                })
            }
            
            if(name === 'btn_1'){
                await ctx.replyWithHTML('🤠Наше Руководство🤠\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333352"><b>Руководство🦾</b></a>')
            }

            if(name === 'btn_2'){
                await ctx.replyWithHTML('💡Наша Идеология💡\n<i>Корпаративная культура <b>Samgau</b></i>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24513516">Письмо руководителя <b>Максимов Евгений👨🏻‍🦰</b></a>')
            }
            //https://wiki.samgau.com/pages/viewpage.action?pageId=19333321
            if(name === 'btn_3'){
                await ctx.replyWithHTML('🗓️Режим Работы🗓️\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333321"><i>Как учитываются</i> <b>часы работы⏱</b></a>')
            }

            if(name === 'btn_4'){
                await ctx.replyWithHTML('📌Внутренние Нормативные Документы📌\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30048437&preview=/30048437/30048433/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D1%82%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%20%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0.pdf">1. <i>Правила </i><b>трудового распорядка📫</b></a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30048437&preview=/30048437/30048434/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%9F%D0%91.pdf">2. <i>Инструкция по </i><b>ПБ📬</b></a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30048437&preview=/30048437/30048435/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%9E%D0%A2%20%D0%B8%20%D0%A2%D0%91.pdf">3. <i>Инструкция по </i><b>ОТ и ТБ📭</b></a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30048437&preview=/30048437/30048436/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D1%81%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D1%8B%D1%85%20%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%D1%85.pdf">4. <i>Положение о </i><b>служебных командировках📪</b></a>')
            }

            if(name === 'btn_5'){
                await ctx.replyWithHTML('<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512592">💰Учет и оплата рабочего времени💰</a>\n\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512617">1 )<b>Учёт переработок➰</b> <i>для оплаты</i></a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512607">2) <b>Удаленная работа➿</b></a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512613">3) <i>Заранее согласованное </i><b>отсутствие на работе</b> <i>(санкционированный прогул с возможностью отработки)🔜</i></a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30049487">4) <b>Внутренний аутсорс</b> <i>(работа на смежных проектах)🔝</i></a>\n\n<a href="https://workpace.samgau.com/main"><i>Ссылка на заявку:</i> <b>Учет и оплата рабочего времени〰️</b></a>\n\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512617"><b>Учёт переработок для оплаты✔️</b></a>')
                await ctx.replyWithHTML('🤠Наше <b>Руководство</b>🤠\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333352"><b>Руководство🦾</b></a>')
            }

            if(name === 'btn_2'){
                await ctx.replyWithHTML('💡Наша <b>Идеология</b>💡\n<i>Корпаративная культура <b>Samgau</b></i>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24513516">Письмо руководителя <b>Максимов Евгений👨🏻‍🦰</b></a>')
            }
            //https://wiki.samgau.com/pages/viewpage.action?pageId=19333321
            if(name === 'btn_3'){
                await ctx.replyWithHTML('🗓️Режим <b>Работы</b>🗓️\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333321"><i>Как учитываются</i> <b>часы работы⏱</b></a>')
            }

            if(name === 'btn_4'){
                await ctx.replyWithHTML('📌Внутренние <b>Нормативные Документы</b>📌\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30048437&preview=/30048437/30048433/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D1%82%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%20%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0.pdf">1. <i>Правила </i><b>трудового распорядка📫</b></a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30048437&preview=/30048437/30048434/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%9F%D0%91.pdf">2. <i>Инструкция по </i><b>ПБ📬</b></a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30048437&preview=/30048437/30048435/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%9E%D0%A2%20%D0%B8%20%D0%A2%D0%91.pdf">3. <i>Инструкция по </i><b>ОТ и ТБ📭</b></a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30048437&preview=/30048437/30048436/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D1%81%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D1%8B%D1%85%20%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%D1%85.pdf">4. <i>Положение о </i><b>служебных командировках📪</b></a>')
            }

            if(name === 'btn_5'){
                await ctx.replyWithHTML('<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512592">💰Учет и оплата <b>рабочего времени💰</b></a>\n\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512617">1 )<b>Учёт переработок➰</b> <i>для оплаты</i></a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512607">2) <b>Удаленная работа➿</b></a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512613">3) <i>Заранее согласованное </i><b>отсутствие на работе</b> <i>(санкционированный прогул с возможностью отработки)🔜</i></a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30049487">4) <b>Внутренний аутсорс</b> <i>(работа на смежных проектах)🔝</i></a>\n\n<a href="https://workpace.samgau.com/main"><i>Ссылка на заявку:</i> <b>Учет и оплата рабочего времени〰️</b></a>\n\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512617"><b>Учёт переработок для оплаты✔️</b></a>')
            }

            if(name === 'btn_6'){
                await ctx.replyWithHTML('<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=21792673">🎫Правила Командирования Сотрудников🎫</a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333308">Заявка на <b>командирование сотрудника🔆</b></a>')
            }

            if(name === 'btn_7'){
                await ctx.replyWithHTML('<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333357">🏖️Как Уйти в Отпуск🏖️</a>\n\n<i><a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333369">Как оформить ежегодный оплачиваемый трудовой отпуск?⭕️</a></i>\n<i><a href="https://wiki.samgau.com/pages/viewpageattachments.action?pageId=19333369&metadataLink=true&preview=/19333369/19334898/%D0%9E%D1%82%D0%BF%D1%83%D1%81%D0%BA%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%87%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC%D1%8B%D0%B9%20%D0%B5%D0%B6%D0%B5%D0%B3%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D1%82%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%BE%D0%B9%20%D0%BE%D1%82%D0%BF%D1%83%D1%81%D0%BA.pdf"><b>Образец</b></a></i>\n\n<i><a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333376">Как оформить отпуск без сохранения заработной платы⭕️</a></i>\n<i><a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333376&preview=/19333376/21791370/%D0%9E%D1%82%D0%BF%D1%83%D1%81%D0%BA%20%D0%B1%D0%B5%D0%B7%20%D1%81%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B7%D0%B0%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%BE%D0%B9%20%D0%BF%D0%BB%D0%B0%D1%82%D1%8B.pdf"><b>Образец</b></a></i>\n\n<i><a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333380">Отпуск в связи с беременностью и рождением ребенка (детей), усыновлением (удочерением) новорожденного ребенка (детей)⭕️</a></i>\n<i><a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333380&preview=/19333380/19334906/%D0%97%D0%B0%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BD%D0%B0%20%D0%BE%D1%82%D0%BF%D1%83%D1%81%D0%BA%20%D0%BF%D0%BE%20%D0%B1%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B8%20%D1%80%D0%BE%D0%B4%D0%B0%D0%BC.pdf"><b>Образец</b></a></i>\n\n<i><a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333385">Как получить компенсацию за неиспользованные дни отпуска?</a></i>\n<i><a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333385&preview=/19333385/19334836/%D0%9A%D0%BE%D0%BC%D0%BF%D0%B5%D0%BD%D1%81%D0%B0%D1%86%D0%B8%D1%8F%20%D0%B7%D0%B0%20%D0%BD%D0%B5%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BE%D1%82%D0%BF%D1%83%D1%81%D0%BA.pdf"><b>Заявление о выплате компенсации⭕️</b></a></i>')
            }

            if(name === 'btn_8'){
                await ctx.replyWithHTML('<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30054387">✅Корпоративные привилегии для сотрудников <b>Samgau</b>✅</a>\n\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=44939258"><b>Рабочие:</b></a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333301">Заявка на вызов такси🚕</a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512630">Реферальная программа "Приведи Друга - Получи Бонус💁🏻"</a>\n\n<b>Обучающие:</b>\n<a href="https://wiki.samgau.com/display/HR/English+Speaking+Club">English Speaking Club🗣</a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19334477">БИБЛИОТЕКА ЗНАНИЙ📕📕📕</a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24511506">Как получить книгу в библиотеке📚</a>\n<a href="https://docs.google.com/spreadsheets/d/1iKcAWO8efXIPcVul52y0sKKMsXjw3UL6Cu9TyBMBdMI/edit#gid=0">пройдите по ссылке и выберите подходящую книгу, посмотрите, свободна ли она 📓</a>\n\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=44939252"><b>Спортивные:</b></a>\n<a href="https://wiki.samgau.com/display/HR/SamgauFootball">SamgauFootball⚽️</a>\n<a href="https://wiki.samgau.com/display/HR/SamgauRunners+Club">SamgauRunners Club🏃‍♀️🏃</a>\n<a href="Доступ в спортзал">https://wiki.samgau.com/pages/viewpage.action?pageId=24511492</a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24511492&preview=/24511492/24513525/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D0%9F%D0%9E%D0%A1%D0%95%D0%A9%D0%95%D0%9D%D0%98%D0%AF%20%D0%A2%D0%A0%D0%95%D0%9D%D0%90%D0%96%D0%95%D0%A0%D0%9D%D0%9E%D0%93%D0%9E%20%D0%97%D0%90%D0%9B%D0%90.pdf">Правила ПОСЕЩЕНИЯ ТРЕНАЖЕРНОГО ЗАЛА🏋️‍♂️</a>\n\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=44939267"><b>Развлекательные:</b></a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333468">Отчет по корпоративным мероприятиям✨✨✨</a>')
            }

            if(name === 'btn_9'){
                await ctx.replyWithHTML('<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333300">👽FAQ о Жизни Компании👽</a>\n\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333310"><b>Инструменты</b> работы🛠</a>\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=27165114">Наши <b>офисы🏢</b></a>')
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