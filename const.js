const commands = `
Мои команды:
/start - Перезапустить Бота
/help - Помощь
/guide - Справочник
`

const startText = `
Что бы тебе легко было ориентироваться \nу меня только 3 команды👇
`

const helpText = `
📘 В справочнике (/guide) есть 9 кнопок. Если ты нашел свою 
тематику, просто нажми на неё и в тот же момент высветится ссылка, либо несколько вариантов со ссылками.
`

const text1 = `
🤠Наше Руководство🤠
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333352"><b>Руководство🦾</b></a>
`

const text2 = `
💡Наша Идеология💡\n<i>Корпаративная культура <b>Samgau</b></i>
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24513516">Письмо руководителя <b>Максимов Евгений👨🏻‍🦰</b></a>
`

const text3 = `
🗓️Режим Работы🗓️
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333321"><i>Как учитываются</i> <b>часы работы⏱</b></a>
`

const text4 = `
📌Внутренние Нормативные Документы📌
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30048437&preview=/30048437/30048433/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D1%82%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%20%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0.pdf">
1. <i>Правила </i><b>трудового распорядка📫</b></a>
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30048437&preview=/30048437/30048434/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%9F%D0%91.pdf">
2. <i>Инструкция по </i><b>ПБ📬</b></a>
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30048437&preview=/30048437/30048435/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%9E%D0%A2%20%D0%B8%20%D0%A2%D0%91.pdf">
3. <i>Инструкция по </i><b>ОТ и ТБ📭</b></a>
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30048437&preview=/30048437/30048436/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D1%81%D0%BB%D1%83%D0%B6%D0%B5%D0%B1%D0%BD%D1%8B%D1%85%20%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0%D1%85.pdf">
4. <i>Положение о </i><b>служебных командировках📪</b></a>
`

const text5 = `
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512592">💰Учет и оплата <b>рабочего времени💰</b></a>\n
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512617">1 )<b>Учёт переработок➰</b> <i>для оплаты</i></a>
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512607">2) <b>Удаленная работа➿</b></a>
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512613">3) <i>Заранее согласованное </i><b>отсутствие на работе</b> <i>(санкционированный прогул с возможностью отработки)🔜</i></a>
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30049487">4) <b>Внутренний аутсорс</b> <i>(работа на смежных проектах)🔝</i></a>\n
<a href="https://workpace.samgau.com/main"><i>Ссылка на заявку:</i> <b>Учет и оплата рабочего времени〰️</b></a>\n
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512617"><b>Учёт переработок для оплаты✔️</b></a>
`

const text6 = `
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=21792673">🎫Правила Командирования Сотрудников🎫</a>\n
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333308">Заявка на <b>командирование сотрудника🔆</b></a>
`

const text7 = `
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333357">🏖️Как Уйти в Отпуск🏖️</a>\n
<i><a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333369">Как оформить ежегодный оплачиваемый трудовой отпуск?⭕️</a></i>
<i><a href="https://wiki.samgau.com/pages/viewpageattachments.action?pageId=19333369&metadataLink=true&preview=/19333369/19334898/%D0%9E%D1%82%D0%BF%D1%83%D1%81%D0%BA%20%D0%BE%D0%BF%D0%BB%D0%B0%D1%87%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC%D1%8B%D0%B9%20%D0%B5%D0%B6%D0%B5%D0%B3%D0%BE%D0%B4%D0%BD%D1%8B%D0%B9%20%D1%82%D1%80%D1%83%D0%B4%D0%BE%D0%B2%D0%BE%D0%B9%20%D0%BE%D1%82%D0%BF%D1%83%D1%81%D0%BA.pdf"><b>Образец</b></a></i>\n
<i><a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333376">Как оформить отпуск без сохранения заработной платы⭕️</a></i>
<i><a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333376&preview=/19333376/21791370/%D0%9E%D1%82%D0%BF%D1%83%D1%81%D0%BA%20%D0%B1%D0%B5%D0%B7%20%D1%81%D0%BE%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B7%D0%B0%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%BE%D0%B9%20%D0%BF%D0%BB%D0%B0%D1%82%D1%8B.pdf"><b>Образец</b></a></i>\n
<i><a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333380">Отпуск в связи с беременностью и рождением ребенка (детей), усыновлением (удочерением) новорожденного ребенка (детей)⭕️</a></i>
<i><a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333380&preview=/19333380/19334906/%D0%97%D0%B0%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BD%D0%B0%20%D0%BE%D1%82%D0%BF%D1%83%D1%81%D0%BA%20%D0%BF%D0%BE%20%D0%B1%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B8%20%D1%80%D0%BE%D0%B4%D0%B0%D0%BC.pdf"><b>Образец</b></a></i>\n
<i><a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333385">Как получить компенсацию за неиспользованные дни отпуска?</a></i>
<i><a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333385&preview=/19333385/19334836/%D0%9A%D0%BE%D0%BC%D0%BF%D0%B5%D0%BD%D1%81%D0%B0%D1%86%D0%B8%D1%8F%20%D0%B7%D0%B0%20%D0%BD%D0%B5%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9%20%D0%BE%D1%82%D0%BF%D1%83%D1%81%D0%BA.pdf"><b>Заявление о выплате компенсации⭕️</b></a></i>
`

const text8 = `
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=30054387">✅Корпоративные привилегии для сотрудников <b>Samgau</b>✅</a>\n
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=44939258"><b>Рабочие:</b></a>
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333301">Заявка на вызов такси🚕</a>
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24512630">Реферальная программа "Приведи Друга - Получи Бонус💁🏻"</a>\n
<b>Обучающие:</b>\n<a href="https://wiki.samgau.com/display/HR/English+Speaking+Club">English Speaking Club🗣</a>
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19334477">БИБЛИОТЕКА ЗНАНИЙ📕📕📕</a>
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24511506">Как получить книгу в библиотеке📚</a>
<a href="https://docs.google.com/spreadsheets/d/1iKcAWO8efXIPcVul52y0sKKMsXjw3UL6Cu9TyBMBdMI/edit#gid=0">пройдите по ссылке и выберите подходящую книгу, посмотрите, свободна ли она 📓</a>\n
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=44939252"><b>Спортивные:</b></a>
<a href="https://wiki.samgau.com/display/HR/SamgauFootball">SamgauFootball⚽️</a>
<a href="https://wiki.samgau.com/display/HR/SamgauRunners+Club">SamgauRunners Club🏃‍♀️🏃</a>
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24511492">Доступ в спортзал✔️</a>
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=24511492&preview=/24511492/24513525/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D0%9F%D0%9E%D0%A1%D0%95%D0%A9%D0%95%D0%9D%D0%98%D0%AF%20%D0%A2%D0%A0%D0%95%D0%9D%D0%90%D0%96%D0%95%D0%A0%D0%9D%D0%9E%D0%93%D0%9E%20%D0%97%D0%90%D0%9B%D0%90.pdf">Правила ПОСЕЩЕНИЯ ТРЕНАЖЕРНОГО ЗАЛА🏋️‍♂️</a>
\n<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=44939267"><b>Развлекательные:</b></a>
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333468">Отчет по корпоративным мероприятиям✨✨✨</a>
`

const text9 = `
<a href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333300">👽FAQ о Жизни Компании👽</a>\n\n<a 
href="https://wiki.samgau.com/pages/viewpage.action?pageId=19333310"><b>Инструменты</b> работы🛠</a>\n<a 
href="https://wiki.samgau.com/pages/viewpage.action?pageId=27165114">Наши <b>офисы🏢</b></a>
`


module.exports.commands = commands
module.exports.startText = startText
module.exports.helpText = helpText
module.exports.text1 = text1
module.exports.text2 = text2
module.exports.text3 = text3
module.exports.text4 = text4
module.exports.text5 = text5
module.exports.text6 = text6
module.exports.text7 = text7
module.exports.text8 = text8
module.exports.text9 = text9


