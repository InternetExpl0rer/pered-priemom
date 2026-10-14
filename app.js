/* «Перед приёмом». Учебный демонстрационный проект.
   Все ответы обрабатываются исключительно в памяти браузера. Без API, cookies,
   localStorage, сетевых запросов и сохранения персональных сведений. */
'use strict';

const app = document.querySelector('#app');
const SOURCES = {
  zinc:[
    {title:'На русском · Справочник MSD: «Избыток цинка»',url:'https://www.msdmanuals.com/ru/home/заболевания-связанные-с-питанием/минералы/избыток-цинка'},
    {title:'На русском · Справочник MSD: «Дефицит меди»',url:'https://www.msdmanuals.com/ru/home/заболевания-связанные-с-питанием/минералы/дефицит-меди'},
    {title:'Международный справочник · NIH ODS: Zinc (специалистам)',url:'https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/'},
    {title:'Международный справочник · NIH ODS: Zinc (для пациентов)',url:'https://ods.od.nih.gov/factsheets/Zinc-Consumer/'},
    {title:'Научная публикация · Jaiser & Winston, J Neurol (2010)',url:'https://pubmed.ncbi.nlm.nih.gov/20232210/'}
  ],
  magnesium:[
    {title:'На русском · Видаль: доксициклин — раздел «Лекарственное взаимодействие»',url:'https://www.vidal.ru/drugs/doxycycline_hydrochloride__13307'},
    {title:'На русском · Видаль: доксициклин в таблетках (инструкция к конкретному препарату)',url:'https://www.vidal.ru/drugs/doxycycline-solution-tablets'},
    {title:'Международный справочник · NIH ODS: Magnesium (специалистам)',url:'https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/'},
    {title:'Международный реестр · DailyMed: Doxycycline — Drug Interactions',url:'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=2cffb084-2b25-4e1b-846b-8681de7ea666'}
  ],
  vitaminK:[
    {title:'На русском · Производитель: инструкция «Варфарин Штада»',url:'https://nizhpharm.ru/products/warfarin-stada.html'},
    {title:'На русском · Видаль: «Варфарин Штада», взаимодействия',url:'https://www.vidal.ru/drugs/warfarin-stada'},
    {title:'Международный справочник · NIH ODS: Vitamin K',url:'https://ods.od.nih.gov/factsheets/VitaminK-Consumer/'},
    {title:'Международный справочник · MedlinePlus: Warfarin',url:'https://medlineplus.gov/druginfo/meds/a682277.html'},
    {title:'Научная публикация · потребление витамина K и варфарин, систематический обзор',url:'https://pubmed.ncbi.nlm.nih.gov/26962786/'}
  ],
  general:[
    {title:'На русском · Роспотребнадзор: памятка потребителям о БАД',url:'https://zpp.rospotrebnadzor.ru/news/federal/525925'},
    {title:'На русском · Роспотребнадзор: как выбирать и покупать БАД',url:'https://zpp.rospotrebnadzor.ru/news/federal/480048'},
    {title:'Международный справочник · NIH ODS: Dietary Supplements',url:'https://ods.od.nih.gov/factsheets/WYNTK-Consumer/'},
    {title:'Международный справочник · NIH NCCIH: Using Dietary Supplements Wisely',url:'https://www.nccih.nih.gov/health/using-dietary-supplements-wisely'}
  ]
};
const LESSONS = {
  zinc:{id:'zinc',tab:'Цинк',icon:'◎',title:'Цинк: два комплекса — одна суммарная доза',principle:'Доза имеет значение',
    situation:'В одном витаминном комплексе содержится 25 мг цинка, во втором — ещё 30 мг. Только из этих добавок получается 55 мг цинка ежедневно.',
    mechanism:'Цинк нужен организму, но его избыток не означает дополнительной пользы. Длительное поступление высоких доз может ухудшать всасывание меди и приводить к её дефициту. При очень высоких дозах возможно влияние и на всасывание магния; взаимодействие с железом зависит от условий, доз и состава.',
    action:'Проверьте количество элементарного цинка в суточной порции каждого средства, сопоставьте дозы и продолжительность приёма. Не добавляйте второй комплекс «на всякий случай». При длительном избыточном приёме или жалобах обсудите ситуацию с врачом.',
    nuance:'В рекомендациях NIH ODS для взрослых указан верхний допустимый уровень цинка 40 мг/сутки из всех источников. Это не персональная дозировка и не универсальная граница токсичности; назначенные врачом схемы оцениваются отдельно. Учитывайте, что пищевые источники в нашем расчёте не учтены.',
    question:'Почему два витаминных комплекса могут создать проблему даже без передозировки каждой отдельной упаковки?',
    answers:['Любые два комплекса обязательно несовместимы','Вещества могут повторяться, а их суммарное количество — стать чрезмерным','Цинк из БАД не усваивается'],correct:1,
    feedback:'Верно: нужно смотреть на суммарное количество вещества из всех принимаемых средств, а не только на каждую банку отдельно.'},
  magnesium:{id:'magnesium',tab:'Магний + антибиотик',icon:'◇',title:'Магний + доксициклин: важно время приёма',principle:'Взаимодействие имеет значение',
    situation:'Человек принимает назначенный доксициклин и одновременно начинает использовать добавку с магнием.',
    mechanism:'Магний способен образовывать с доксициклином труднорастворимые комплексы в пищеварительном тракте. Это может уменьшать всасывание антибиотика и влиять на эффективность лечения. Речь не о запрете всех добавок при любых антибиотиках.',
    action:'Проверьте инструкцию именно к назначенному препарату и уточните режим приёма у фармспециалиста или врача. Не изменяйте антибиотикотерапию самостоятельно. Если приём одновременно уже неоднократно происходил, свяжитесь с лечащим врачом.',
    nuance:'В справочнике NIH ODS для тетрациклинов приведён ориентир: антибиотик не менее чем за 2 часа до или через 4–6 часов после добавки с магнием. Однако это справочная информация, а не индивидуальное назначение; следуйте инструкции к конкретному препарату и рекомендациям специалиста.',
    question:'В чём состоит основная проблема одновременного приёма магния с доксициклином?',
    answers:['Магний может снижать всасывание антибиотика','Магний полностью нейтрализует антибиотик в крови','Любые БАД запрещены при лечении любыми антибиотиками'],correct:0,
    feedback:'Верно: в пищеварительном тракте могут образовываться комплексы, уменьшающие всасывание доксициклина.'},
  vitaminK:{id:'vitaminK',tab:'Витамин K + варфарин',icon:'✳',title:'Витамин K + варфарин: лечение в приоритете',principle:'Изменения терапии согласуют с врачом',
    situation:'Человек принимает варфарин и хочет добавить комплекс с витамином K «для костей» или резко меняет поступление витамина K.',
    mechanism:'Варфарин снижает активность витамин-K-зависимых факторов свёртывания. Резкое изменение потребления витамина K может изменить антикоагулянтный эффект и показатель МНО (INR). Увеличение поступления витамина K способно ослабить действие варфарина; резкое снижение — усилить.',
    action:'Не начинайте и не отменяйте витамин K дополнительно без согласования с лечащим врачом. Не прекращайте варфарин самостоятельно. Врач при необходимости назначит контроль МНО и определит тактику.',
    nuance:'Полностью исключать зелёные овощи не требуется: важнее стабильность их потребления. Потребление витамина K с пищей и из добавок учитывается вместе; новые комплексы и изменения рациона обсуждают с лечащим врачом.',
    question:'Как правильно поступить пациенту на варфарине перед началом новой добавки с витамином K?',
    answers:['Самостоятельно уменьшить дозу варфарина','Полностью исключить зелёные овощи','Согласовать изменение поступления витамина K с лечащим врачом'],correct:2,
    feedback:'Верно: изменения поступления витамина K следует согласовать с врачом; варфарин самостоятельно не отменяют.'},
  general:{id:'general',tab:'Общая проверка',icon:'✦',title:'Пять вопросов перед приёмом добавки',principle:'Проверяем ситуацию, а не только название БАД',
    situation:'Совет знакомых, реклама или привычка принимать витамины не доказывают, что конкретная добавка нужна именно вам.',
    mechanism:'Оцените цель приёма, состав и количество компонентов в суточной порции. Сопоставьте их с другими добавками и лекарствами, учитывайте особенности здоровья. Убедитесь, что рекламное обещание не подменяет доказательства эффективности.',
    action:'Сохраните составы и дозировки, сравните все принимаемые средства, прочитайте официальную инструкцию к лекарствам. Если информации недостаточно — уточните её у фармспециалиста; если имеется значимый фактор риска — обратитесь к врачу.',
    nuance:'Эта программа содержит ограниченный набор проверенных учебных примеров и не выполняет полную проверку взаимодействий. Отсутствие предупреждения здесь никогда не означает доказанную безопасность добавки.',
    question:'Что лучше всего сделать перед добавлением нового БАД к уже принимаемым средствам?',
    answers:['Оценить цель, полный состав, дозировку и сочетания с лекарствами','Выбрать продукт с самым длинным списком витаминов','Ориентироваться только на отзывы и рекламу'],correct:0,
    feedback:'Верно: оценивают всю ситуацию применения, а не только отдельный продукт.'}
};

const blank=()=>({purpose:'',source:'',product:'',known:'',ingredients:[],zincMain:'',zincExtra:'',zincDuration:'',meds:'',medNames:'',rxDoxy:false,rxWarfarin:false,other:'',duplicates:'',condition:'',replace:'',together:'',urgent:''});
let a=blank();
let screen='home';
let step=0;
let phase='lesson';
let currentLesson='general';
let quizPick=null;
let feedback='';
let demoMode=false;
let report=null;

function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));}
function e(value){return escapeHtml(value);}
function scrollTop(){window.scrollTo({top:0,behavior:'instant'});}
function button(label,action,kind='primary',attrs=''){return `<button type="button" class="btn ${kind}" data-action="${action}" ${attrs}>${label}</button>`;}
function choice(key,val,label){return `<label class="choice ${a[key]===val?'selected':''}"><input type="radio" name="${key}" data-key="${key}" value="${e(val)}" ${a[key]===val?'checked':''}>${label}</label>`;}
function choices(key,list){return `<div class="choice-grid">${list.map(([v,l])=>choice(key,v,l)).join('')}</div>`;}
function checkIngredient(key,label){return `<label class="choice ${a.ingredients.includes(key)?'selected':''}"><input type="checkbox" data-ingredient="${key}" ${a.ingredients.includes(key)?'checked':''}>${label}</label>`;}
function input(key,placeholder='',type='text',extra=''){return `<input class="field" type="${type}" data-key="${key}" value="${e(a[key])}" placeholder="${e(placeholder)}" ${extra}>`;}
function question(n,title,content,hint=''){return `<section class="question"><div class="q-number">Вопрос ${n}</div><div class="q-title">${title}</div>${hint?`<p class="q-hint">${hint}</p>`:''}${content}</section>`;}
function linksFor(id){return `<details class="source-block"><summary>Проверенные материалы на русском языке и научные источники ↗</summary><ul>${(SOURCES[id]||SOURCES.general).map(s=>`<li><a target="_blank" rel="noopener noreferrer" href="${s.url}">${e(s.title)}</a></li>`).join('')}</ul><p class="fine">Русскоязычные материалы размещены первыми. Инструкции относятся к конкретным лекарственным формам и могут отличаться: сверяйтесь с инструкцией к своей упаковке и рекомендациями специалиста.</p></details>`;}
function allSources(){return ['zinc','magnesium','vitaminK','general'].map(id=>`<h4>${e(LESSONS[id].title)}</h4><ul>${SOURCES[id].map(s=>`<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${e(s.title)}</a></li>`).join('')}</ul>`).join('');}
function hasIng(v){return a.ingredients.includes(v);}
function hasDoxy(){return a.meds==='yes'&&(a.rxDoxy||/доксициклин|doxycycl|юнидокс|unidox/i.test(a.medNames));}
function hasWarfarin(){return a.meds==='yes'&&(a.rxWarfarin||/варфарин|warfarin/i.test(a.medNames));}
function zincTotal(){const n1=parseNum(a.zincMain), n2=parseNum(a.zincExtra);return (n1===null&&n2===null)?null:(n1||0)+(n2||0);}
function parseNum(v){if(v===''||v===null||v===undefined)return null;const num=Number(String(v).replace(',','.'));return Number.isFinite(num)&&num>=0&&num<=10000?num:null;}
function detect(){
  const doctor=[],pharm=[],notes=[];
  const doxy=hasDoxy(),warfarin=hasWarfarin();
  const comboMag=doxy&&hasIng('magnesium');
  const comboK=warfarin&&hasIng('vitaminK');
  const total=zincTotal();
  if(a.replace==='yes')doctor.push('Вы планируете заменить назначенное лечение добавкой. Решение об изменении терапии принимает врач.');
  if(comboK)doctor.push('Обнаружено изученное сочетание «витамин K + варфарин»: изменение потребления витамина K необходимо согласовать с лечащим врачом.');
  if(comboMag&&a.together==='repeated')doctor.push('Вы сообщили о неоднократном одновременном приёме магния с доксициклином: важно связаться с лечащим врачом из-за возможного снижения всасывания антибиотика.');
  if(hasIng('zinc')&&total!==null&&total>=50&&a.zincDuration==='weeks')doctor.push('Вы указали высокую дозу цинка из добавок в течение нескольких недель. Рекомендуется врачебная оценка и уточнение риска дефицита меди.');
  if(['pregnancy','renal'].includes(a.condition))doctor.push('Вы указали обстоятельство, требующее индивидуальной врачебной оценки применения добавки.');
  if(a.urgent==='yes')doctor.unshift('Вы отметили серьёзные симптомы. При острых или выраженных симптомах немедленно обращайтесь за неотложной медицинской помощью.');
  if(a.known!=='yes')pharm.push('Нужно уточнить состав и количества компонентов в суточной порции добавки.');
  if(!a.ingredients.length)pharm.push('Компоненты добавки не определены в учебном перечне: по нему нельзя проверить конкретные сочетания.');
  if(a.meds==='unknown')pharm.push('Не все принимаемые лекарства учтены. Подготовьте полный перечень средств.');
  if(a.meds==='yes'&&!comboK&&!comboMag)pharm.push('Вы принимаете лекарства, но их совместимость с добавкой не проверена ограниченной учебной базой. Уточните её у специалиста.');
  if(a.meds==='yes'&&comboMag)pharm.push('Магний может уменьшать всасывание доксициклина. Уточните режим приёма для вашего препарата; не меняйте курс самостоятельно.');
  if(a.meds==='yes'&&comboK)notes.push('Врачебная рекомендация сохраняется даже после правильного ответа на учебный вопрос.');
  if(a.other==='unknown'||a.other==='yes'&&a.duplicates!=='no')pharm.push('Требуется сверить все витаминные комплексы и повторяющиеся вещества.');
  if(a.other==='yes'&&hasIng('zinc')&&a.zincExtra==='')pharm.push('При наличии других комплексов с цинком уточните суммарную суточную дозу.');
  if(hasIng('zinc')&&total!==null&&total>=40)pharm.push('Указанная доза цинка только из добавок достигает или превышает ориентир NIH ODS для взрослых — 40 мг/сутки из всех источников. Это не персональная оценка риска.');
  if(hasIng('zinc')&&total===null)pharm.push('Вы отметили цинк, но не ввели его количество: суммарная доза неизвестна.');
  if(a.condition==='other'||a.condition==='unknown')pharm.push('Особенности здоровья необходимо уточнить при выборе добавки.');
  if(a.replace==='unknown')pharm.push('Необходимо уточнить, является ли добавка дополнением к назначенной терапии или попыткой её заменить.');
  if(a.source==='internet')notes.push('Рекламная рекомендация не является доказательством необходимости применения.');
  if(a.purpose==='symptoms')notes.push('Если добавка приобретается для устранения симптомов, важно не откладывать диагностику и необходимое лечение.');
  if(a.purpose==='unknown')pharm.push('Цель и предполагаемую пользу применения добавки следует определить до покупки.');
  if(a.together==='unknown'&&comboMag)pharm.push('Нужно уточнить, принимаются ли магний и доксициклин в одно время.');
  if(a.urgent==='unknown')pharm.push('Если состояние вызывает сомнения, лучше обратиться за профессиональной помощью.');
  let route=doctor.length?'doctor':pharm.length?'pharm':'education';
  let lessons=[];
  if(hasIng('zinc'))lessons.push('zinc');
  if(comboMag||hasIng('magnesium'))lessons.push('magnesium');
  if(comboK||hasIng('vitaminK'))lessons.push('vitaminK');
  if(!lessons.length)lessons=['general'];
  // При лекарственном взаимодействии кейс по нему важнее общих сведений.
  let primary=comboK?'vitaminK':comboMag?'magnesium':hasIng('zinc')?'zinc':lessons[0];
  return {doctor,pharm,notes,route,lessons:[...new Set(lessons)],primary,comboMag,comboK,total};
}
function header(){return `<div class="step-top"><span class="step-count">Шаг ${step+1} из 5</span><span class="step-time">≈ 3–5 минут · без регистрации</span></div>`;}
function side(){const names=['Цель','Состав','Сочетания','Ограничения','Обучение'];return `<aside class="sidebar"><div class="eyebrow">ВАШ МАРШРУТ</div><h2>Проверьте перед приёмом</h2><div class="progress-list">${names.map((v,i)=>`<div class="progress-item ${i===step?'current':i<step?'done':''}" ${i===step?'aria-current="step"':''}><span class="progress-num">${i<step?'✓':i+1}</span>${v}</div>`).join('')}</div><p class="side-privacy">🔒 Ваши ответы остаются в этом браузере. При обновлении страницы они исчезнут.</p></aside>`;}
function home(){return `<section class="hero"><div><div class="eyebrow">Образовательный проект о БАД</div><h1>Перед приёмом — <em>проверь!</em></h1><p class="lede">Нужно ли мне это? Что уже есть в составе? А если я принимаю лекарства? За несколько минут разберитесь, на что обратить внимание <b>до</b> приёма добавки.</p><div class="hero-btns">${button('Начать самопроверку →','start')}${button('Посмотреть учебные примеры','jump-cases','light')}</div><div class="hero-note">✳ Не диагноз и не автоматическое разрешение принимать БАД</div></div><div class="hero-art" aria-hidden="true"><div class="paper-back"></div><div class="paper-front"><div class="paper-top">ВАША КАРТА САМОПРОВЕРКИ</div><div class="paper-title">Что я принимаю и зачем?</div><div class="paper-line"></div><div class="paper-line short"></div><div class="paper-check">Цель применения</div><div class="paper-check">Состав и дозировка</div><div class="paper-check">Сочетания с лекарствами</div><div class="paper-check">Следующий шаг</div></div><div class="bubble top">✓ Не полагайтесь на рекламу</div><div class="bubble bottom">✦ Спросить — нормально</div></div></section>
<section class="section-heading"><div class="eyebrow">КАК ЭТО РАБОТАЕТ</div><h2>Проверка, после которой вы знаете больше</h2><p>Не выдаём заключение «безопасно». Учим оценивать ситуацию и выбирать следующий шаг.</p></section>
<div class="feature-row"><article class="feature"><span class="num">01 — УТОЧНИТЬ</span><h3>Пять коротких этапов</h3><p>Цель, состав, дозировки, лекарства и важные обстоятельства.</p></article><article class="feature"><span class="num">02 — РАЗОБРАТЬСЯ</span><h3>Объяснение вместо запрета</h3><p>Наглядные примеры, механизмы взаимодействий и контрольный вопрос.</p></article><article class="feature"><span class="num">03 — ДЕЙСТВОВАТЬ</span><h3>Понятный дальнейший шаг</h3><p>Памятка, помощь фармспециалиста или обращение к врачу.</p></article></div>
<section class="section-heading" id="cases"><div class="eyebrow">ПРИМЕРЫ ДЛЯ ОБУЧЕНИЯ</div><h2>Попробуйте готовую ситуацию</h2><p>Демонстрационные сценарии, не реальные данные пациента.</p></section>
<div class="quick-cases"><button class="case-preview" data-action="demo-zinc"><span class="case-symbol">◎</span><strong>Цинк: два комплекса</strong><small>25 мг + 30 мг. Почему важно посчитать суммарную дозу?</small></button><button class="case-preview" data-action="demo-magnesium"><span class="case-symbol">◇</span><strong>Магний и доксициклин</strong><small>Как минеральная добавка может повлиять на лечение?</small></button><button class="case-preview" data-action="demo-vitaminK"><span class="case-symbol">✳</span><strong>Витамин K и варфарин</strong><small>Почему решение об изменении приёма принимает врач?</small></button></div>
<div class="note-strip">Это демонстрационный учебный инструмент с ограниченной базой случаев. Он не выявляет все лекарственные взаимодействия и не заменяет консультацию специалиста.</div>`;}
function stepBody(){
  if(step===0)return `${header()}<h1 class="step-title">Для чего вам нужна добавка?</h1><p class="step-sub">Начнём с цели. Указанная причина приёма не доказывает, что добавка необходима, но помогает понять, что стоит проверить.</p>
  ${question('01','Зачем вы хотите использовать БАД?',choices('purpose', [['prevention','Для профилактики / поддержания здоровья'],['deficiency','Для восполнения установленного дефицита'],['symptoms','Чтобы облегчить симптомы'],['unknown','Пока не могу определить цель']]))}
  ${question('02','Откуда появилась рекомендация?',choices('source',[['doctor','От врача'],['pharm','От фармспециалиста'],['internet','Из рекламы, соцсетей или от знакомых'],['myself','Решил(а) самостоятельно']]))}
  ${question('—','Название добавки (необязательно)',input('product','Например, «минеральный комплекс»'),'Можно указать название с упаковки. Мы не ищем препараты в интернете и не проводим полную проверку по названию.')}`;
  if(step===1)return `${header()}<h1 class="step-title">Что именно входит в состав?</h1><p class="step-sub">Суточная порция и количество действующих компонентов важнее обещаний на лицевой стороне упаковки.</p>
  ${question('03','Вы знаете состав и количества компонентов?',choices('known',[['yes','Да, могу найти количество каждого вещества'],['partial','Частично — знаю не все дозы'],['no','Нет, ещё не изучал(а) состав']]))}
  ${question('—','Какие вещества есть в интересующей добавке?',`<div class="choice-grid">${checkIngredient('zinc','Цинк')}${checkIngredient('magnesium','Магний')}${checkIngredient('vitaminK','Витамин K')}${checkIngredient('other','Другие / не знаю точно')}</div>`, 'Отметьте только известные компоненты. Если вещества здесь нет, оно не будет автоматически проверено.')}
  ${hasIng('zinc')?`<div class="sub-card"><div class="q-title">Сколько элементарного цинка в суточной порции?</div><div class="inline-fields"><div class="field-group"><label class="field-label">В первой добавке, мг/сутки</label>${input('zincMain','Например, 25','number','min="0" max="10000" step="0.1" inputmode="decimal"')}</div></div><p class="fine">Если количество не указано — оставьте поле пустым. Не путайте массу соединения цинка с количеством элементарного цинка.</p><div class="q-title" style="font-size:14px;margin-top:14px">Как долго принимаете цинк?</div>${choices('zincDuration',[['planning','Только планирую'],['days','Несколько дней'],['weeks','Несколько недель или дольше'],['unknown','Не знаю / нерегулярно']])}</div>`:''}
  <div class="callout">Незнакомый состав или неизвестная суточная доза — основание уточнить информацию, а не основание считать средство безопасным.</div>`;
  if(step===2)return `${header()}<h1 class="step-title">Что ещё вы принимаете?</h1><p class="step-sub">БАД может взаимодействовать с лекарством, а компоненты разных комплексов — повторяться. Наша учебная база распознаёт лишь два конкретных лекарства.</p>
  ${question('04','Принимаете ли вы лекарственные препараты?',choices('meds',[['yes','Да'],['no','Нет'],['unknown','Не уверен(а), что всё учёл(учла)']]))}
  ${a.meds==='yes'?`<div class="sub-card"><div class="q-title">Название или список лекарств (необязательно)</div>${input('medNames','Например, доксициклин; другое лекарство')}<p class="fine">Не вводите ФИО, диагноз и другие личные данные. Свободный текст не равен проверке всех взаимодействий.</p><div class="q-title" style="font-size:14px;margin-top:15px">Если есть в списке, отметьте:</div><div class="choice-grid"><label class="choice ${a.rxDoxy?'selected':''}"><input type="checkbox" data-flag="rxDoxy" ${a.rxDoxy?'checked':''}>Доксициклин</label><label class="choice ${a.rxWarfarin?'selected':''}"><input type="checkbox" data-flag="rxWarfarin" ${a.rxWarfarin?'checked':''}>Варфарин</label></div><p class="fine">Если вашего лекарства нет в списке, совместимость автоматически не проверена. Доступны только образовательные пояснения.</p></div>`:''}
  ${question('05','Принимаете ли другие БАД или витаминные комплексы?',choices('other',[['yes','Да'],['no','Нет'],['unknown','Не уверен(а)']]))}
  ${a.other==='yes'?`<div class="sub-card"><div class="q-title" style="font-size:15px">Сверяли ли вы повторяющиеся вещества?</div>${choices('duplicates',[['yes','Да, нашёл(ла) совпадения'],['no','Да, проверил(а) — повторений нет'],['unknown','Нет, ещё не сравнивал(а)']])}${hasIng('zinc')?`<div class="field-group" style="margin-top:17px"><label class="field-label">Дополнительный цинк из других БАД, мг/сутки (если известно)</label>${input('zincExtra','Например, 30','number','min="0" max="10000" step="0.1" inputmode="decimal"')}<p class="fine">Указывайте суммарно цинк из остальных добавок; пища не учитывается.</p></div>`:''}</div>`:''}
  ${(a.meds==='yes' && hasDoxy()&&hasIng('magnesium'))?`<div class="sub-card"><div class="q-title">Как применяли магний относительно доксициклина?</div>${choices('together',[['no','Не одновременно / ещё не начал(а)'],['once','Был один случай одновременного приёма'],['repeated','Неоднократно принимал(а) одновременно'],['unknown','Не могу точно сказать']])}</div>`:''}`;
  if(step===3)return `${header()}<h1 class="step-title">Есть ли важные обстоятельства?</h1><p class="step-sub">Мы не запрашиваем диагноз и не пытаемся оценивать заболевание онлайн. Отметьте только ситуацию, которая влияет на необходимость индивидуальной консультации.</p>
  ${question('06','Что следует учитывать при выборе добавки?',choices('condition',[['none','Нет известных особых обстоятельств'],['pregnancy','Беременность или грудное вскармливание'],['renal','Заболевание почек или печени'],['other','Другое хроническое заболевание / постоянное лечение'],['unknown','Не знаю / не хочу уточнять']]))}
  ${question('07','Планируете ли вы заменить назначенное лекарство БАДом?',choices('replace',[['yes','Да'],['no','Нет'],['unknown','Пока не определился(ась)']]))}
  ${question('08','Есть ли сейчас выраженные тревожные симптомы?',choices('urgent',[['no','Нет'],['yes','Да: например, сильное кровотечение, затруднение дыхания, внезапное ухудшение состояния'],['unknown','Не уверен(а)']]),'Этот вопрос не является диагностикой. При острых или опасных симптомах не ожидайте результата опроса.')}
  ${a.urgent==='yes'?'<div class="callout critical"><b>Важно:</b> при выраженных или острых симптомах незамедлительно обращайтесь за неотложной медицинской помощью. Продолжение опросника не должно задерживать обращение.</div>':''}`;
  return stepFive();
}
function stepFive(){const d=detect();if(!d.lessons.includes(currentLesson) && currentLesson!=='general')currentLesson=d.primary;
  return `${header()}<h1 class="step-title">Теперь разберёмся вместе</h1><p class="step-sub">На основе ответов мы выбрали обучающий материал. После короткого вопроса вы получите памятку с дальнейшими действиями.</p>
    ${d.doctor.length?`<div class="callout critical"><b>Важное предупреждение:</b> выявлено обстоятельство, требующее врачебной оценки. Не откладывайте обращение до окончания обучения. Не меняйте назначенное лечение самостоятельно.</div>`:''}
    ${d.route==='pharm'?`<div class="callout warn">Некоторые сведения не проверены. Сайт предлагает образовательную информацию, но рекомендует уточнить ситуацию у фармспециалиста независимо от результатов теста.</div>`:''}
    ${phase==='result'?finalView(d):lessonView(d)}`;
}
function lessonView(d){const l=LESSONS[currentLesson];return `<div class="lesson-banner"><h3>Проверка → понимание → следующий шаг</h3><p>Первый результат зависит от ответов об обстоятельствах, а не от того, насколько хорошо вы пройдёте учебный тест.</p></div>
  <div class="lesson-tabs" role="tablist" aria-label="Учебные темы">${d.lessons.map(id=>`<button type="button" class="tab ${currentLesson===id?'active':''}" data-action="lesson-${id}" role="tab" aria-selected="${currentLesson===id}">${e(LESSONS[id].tab)}</button>`).join('')}${!d.lessons.includes('general')?`<button type="button" class="tab ${currentLesson==='general'?'active':''}" data-action="lesson-general" role="tab" aria-selected="${currentLesson==='general'}">Общая проверка</button>`:''}</div>
  <article class="lesson"><div class="subline">${e(l.principle)}</div><h3>${e(l.title)}</h3><div class="pill">Учебная ситуация</div><p>${e(l.situation)}</p><h4>Почему это важно</h4><p>${e(l.mechanism)}</p><div class="point"><b>Что делать:</b> ${e(l.action)}</div><details class="source-block"><summary>Дозировки, нюансы и дополнительные сведения</summary><p>${e(l.nuance)}</p></details>${linksFor(l.id)}</article>
  <div class="quiz"><div class="q-number">ПРОВЕРЬТЕ ПОНИМАНИЕ</div><h4>${e(l.question)}</h4><div class="choice-grid">${l.answers.map((txt,i)=>`<label class="choice ${quizPick===i?'selected':''}"><input type="radio" name="quiz" data-quiz="${i}" ${quizPick===i?'checked':''}>${e(txt)}</label>`).join('')}</div>${quizPick!==null?`<div class="quiz-feedback ${quizPick!==l.correct?'wrong':''}">${quizPick===l.correct?e(l.feedback):`Не совсем. ${e(l.feedback)} Вы можете изменить ответ, чтобы закрепить материал.`}</div>`:''}</div>
  <section class="question"><div class="q-title">Удалось ли вам разобраться в объяснении?</div><div class="understand-row">${[['yes','Да, понятно'],['partial','Частично'],['no','Нужна помощь']].map(([v,t])=>`<button type="button" class="understand ${feedback===v?'selected':''}" data-action="understand-${v}">${t}</button>`).join('')}</div>${feedback==='partial'?'<div class="callout warn">Остались вопросы? Разверните раздел с подробностями и сохраните их для фармспециалиста.</div>':feedback==='no'?'<div class="callout warn">Мы включим в памятку предложение обсудить ситуацию с фармспециалистом; в случае серьёзного риска — с врачом.</div>':''}</section>
  <div class="actions">${button('← Назад к вопросам','back','outline')}<div>${button('Пропустить проверку знаний','skip','ghost')} ${button('Получить итоговую памятку →','finish','primary',`${(quizPick===null||!feedback)?'disabled title="Ответьте на учебный вопрос и отметьте понимание"':''}`)}</div></div>`;}
function finalView(d){const extraPharm=(feedback==='partial'||feedback==='no');const route=d.route==='doctor'?'doctor':extraPharm?'pharm':d.route;
  const title=route==='doctor'?'Рекомендуется обращение к врачу':route==='pharm'?'Нужно уточнить информацию':'Вы прошли основную самопроверку';
  const description=route==='doctor'?'Отмечено обстоятельство, требующее индивидуальной врачебной оценки. При выраженных острых симптомах обращайтесь за неотложной помощью.':route==='pharm'?'Перед применением добавки остаются вопросы, которые следует обсудить с фармацевтическим специалистом. При необходимости он направит к врачу.':'По вашим ответам не выявлено обстоятельств, для которых наш учебный алгоритм предусматривает обязательную консультацию. Это не доказывает безопасность или необходимость применения БАД.';
  const reasons=(route==='doctor'?d.doctor:route==='pharm'?d.pharm:[]).concat(extraPharm?['После обучения вы отметили, что не всё понятно: полезно задать вопросы специалисту.']:[]);
  const unique=[...new Set(reasons)];
  report={route,title,description,reasons:unique,notes:d.notes,lesson:currentLesson,quiz:quizPick===null?'Пропущен':quizPick===LESSONS[currentLesson].correct?'Верно':'Требует повторения',understanding:feedback||'Без ответа',a:{...a,ingredients:[...a.ingredients]},total:d.total};
  return `<div class="report-stamp">ПЕРЕД ПРИЁМОМ · ОБРАЗОВАТЕЛЬНАЯ ПАМЯТКА · ${new Date().toLocaleDateString('ru-RU')}</div><div class="result-head ${route}"><div class="result-icon" aria-hidden="true">${route==='doctor'?'!':route==='pharm'?'?':'✓'}</div><div><h3>${title}</h3><p>${description}</p></div></div>
  <h3>Ваши дальнейшие шаги</h3>${unique.length?`<ol class="reason-list">${unique.map(x=>`<li>${e(x)}</li>`).join('')}</ol>`:`<p class="dim">Продолжайте оценивать цель, необходимость применения, состав и суммарные дозы. При появлении вопросов обратитесь к специалисту.</p>`}
  ${d.notes.length?`<div class="resource-box"><h4>Дополнительные замечания</h4>${d.notes.map(x=>`<p>• ${e(x)}</p>`).join('')}</div>`:''}
  <div class="mini-stat"><span>Урок: ${e(LESSONS[currentLesson].tab)}</span><span>Проверка знаний: ${e(report.quiz)}</span><span>Понимание: ${feedback==='yes'?'Да':feedback==='partial'?'Частично':feedback==='no'?'Требуется помощь':'Не указано'}</span></div>
  <div class="result-actions">${button('↓ Скачать памятку (.txt)','download')} ${button('⎙ Печать / PDF','print','light')}</div>
  <details class="appendix"><summary>Ваши исходные данные и известные дозировки</summary><div class="appendix-inner">${summaryHtml(d)}</div></details>
  <details class="appendix"><summary>Справочные приложения и научные источники</summary><div class="appendix-inner"><h4>Что важно помнить</h4><ul><li>В учебной базе подробно рассмотрены только три случая: цинк и минеральный баланс, магний с доксициклином, витамин K с варфарином.</li><li>Для взрослых NIH ODS указывает верхний допустимый уровень потребления цинка 40 мг/сутки из всех источников. Это не индивидуальное назначение; рацион в расчёте сайта не учитывается.</li><li>Для магния с тетрациклинами NIH ODS приводит интервалы разнесения, но режим конкретного лекарства уточняют по инструкции и у специалиста.</li><li>При варфарине важна стабильность поступления витамина K, индивидуальный контроль и врачебное согласование изменений.</li></ul>${allSources()}</div></details>
  <div class="resource-box"><h4>Что взять на консультацию?</h4><p>Упаковки или фотографии составов БАД, количество действующих веществ в суточной порции, список лекарств и вопросы, возникшие после чтения материалов.</p></div>
  <p class="privacy">Ответы обрабатываются локально и не отправляются на сервер. Не вводите ФИО или другие персональные сведения. Скачиваемая памятка хранится там, куда вы сами её сохраните. При перезагрузке страницы данные исчезнут.</p>
  <div class="finish-line"><h3>Попробовать другую ситуацию</h3><div class="examples-footer">${button('◎ Цинк','demo-zinc','outline')}${button('◇ Магний + доксициклин','demo-magnesium','outline')}${button('✳ Витамин K + варфарин','demo-vitaminK','outline')}</div><div class="actions">${button('← Повторить учебный материал','back-to-lesson','light')}${button('Начать новый опрос','restart','primary')}</div></div>`;
}
function summaryHtml(d){let parts=[['Добавка',a.product||'Название не указано'],['Цель',({prevention:'Профилактика',deficiency:'Восполнение дефицита',symptoms:'Облегчение симптомов',unknown:'Не определена'})[a.purpose]||'Не указана'],['Состав известен',({yes:'Да',partial:'Частично',no:'Нет'})[a.known]||'Не указано'],['Выбранные компоненты',a.ingredients.map(id=>({zinc:'Цинк',magnesium:'Магний',vitaminK:'Витамин K',other:'Другие / неизвестно'})[id]).join(', ')||'Не определены'],['Принимаемые лекарства',a.meds==='yes'?(a.medNames||[a.rxDoxy?'Доксициклин':'',a.rxWarfarin?'Варфарин':''].filter(Boolean).join(', ')||'Названия не указаны'):a.meds==='no'?'Нет':'Не уточнены'],['Другие добавки',a.other==='yes'?'Да':a.other==='no'?'Нет':'Не уточнено']];
 if(hasIng('zinc'))parts.push(['Цинк из указанных добавок',d.total===null?'Доза неизвестна':d.total+' мг/сутки (пища не учтена)']);
 return `<ul>${parts.map(([k,v])=>`<li><b>${e(k)}:</b> ${e(v)}</li>`).join('')}</ul><p class="fine">Значения введены пользователем. Приложение не проверяет подлинность состава и не заменяет профессиональную оценку.</p>`;}
function validate(){let err=[];if(step===0){if(!a.purpose)err.push('Укажите цель применения.');if(!a.source)err.push('Укажите источник рекомендации.');}
  if(step===1){if(!a.known)err.push('Укажите, известен ли вам состав.');if(hasIng('zinc')&&!a.zincDuration)err.push('Укажите срок приёма цинка или выберите «не знаю».');if(a.zincMain!==''&&parseNum(a.zincMain)===null)err.push('Проверьте введённую дозировку цинка.');}
  if(step===2){if(!a.meds)err.push('Укажите, принимаете ли вы лекарства.');if(!a.other)err.push('Укажите, принимаете ли вы другие добавки.');if(a.other==='yes'&&!a.duplicates)err.push('Уточните, сверены ли повторяющиеся компоненты.');if(a.zincExtra!==''&&parseNum(a.zincExtra)===null)err.push('Проверьте количество цинка из других добавок.');if(a.meds==='yes'&&hasDoxy()&&hasIng('magnesium')&&!a.together)err.push('Уточните режим приёма магния с доксициклином.');}
  if(step===3){if(!a.condition)err.push('Укажите особенности здоровья.');if(!a.replace)err.push('Ответьте на вопрос о замене терапии.');if(!a.urgent)err.push('Ответьте на вопрос о тревожных симптомах.');}return err;}
function survey(){app.innerHTML=`<div class="survey-layout">${side()}<section class="main-panel">${demoMode?'<div class="callout">Это заполненный учебный сценарий. Вы можете менять ответы; это не реальные данные пациента.</div>':''}${stepBody()}${step<4?`<div id="validation" class="validation" role="alert"></div><div class="actions">${step>0?button('← Назад','back','outline'):button('← На главную','home','outline')}${button(step===3?'Перейти к обучению →':'Продолжить →','next')}</div>`:''}</section></div>`;
  document.title=(step===4?'Обучение и результат':`Шаг ${step+1} из 5`)+' · Перед приёмом';}
function render(){if(screen==='home'){app.innerHTML=home();document.title='Перед приёмом — проверь! · Образовательный опросник';}else survey();}
function restart(){a=blank();screen='survey';step=0;phase='lesson';currentLesson='general';quizPick=null;feedback='';report=null;demoMode=false;render();scrollTop();}
function setDemo(id){a=blank();a.purpose='prevention';a.source='internet';a.known='yes';a.meds='no';a.other='no';a.condition='none';a.replace='no';a.urgent='no';
  if(id==='zinc'){a.product='Два витаминно-минеральных комплекса';a.ingredients=['zinc'];a.zincMain='25';a.zincExtra='30';a.zincDuration='weeks';a.other='yes';a.duplicates='yes';}
  if(id==='magnesium'){a.product='БАД с магнием';a.ingredients=['magnesium'];a.meds='yes';a.medNames='Доксициклин';a.rxDoxy=true;a.together='repeated';}
  if(id==='vitaminK'){a.product='Комплекс с витамином K';a.ingredients=['vitaminK'];a.meds='yes';a.medNames='Варфарин';a.rxWarfarin=true;}
  demoMode=true;screen='survey';step=4;phase='lesson';currentLesson=id;quizPick=null;feedback='';report=null;render();scrollTop();}
function reportText(){if(!report)return '';const r=report;const things=['ПЕРЕД ПРИЁМОМ — ПРОВЕРЬ!','ОБРАЗОВАТЕЛЬНАЯ ПАМЯТКА',`Дата: ${new Date().toLocaleDateString('ru-RU')}`,'',r.title,r.description,'','Что уточнить / дальнейшие действия:',...(r.reasons.length?r.reasons:['Дополнительных обстоятельств из учебного перечня не выявлено. Это не подтверждение безопасности.']).map((x,i)=>(i+1)+'. '+x),'','Учебная тема: '+LESSONS[r.lesson].title,'Контрольный вопрос: '+r.quiz,'Самооценка понимания: '+(r.understanding==='yes'?'Да':r.understanding==='partial'?'Частично':r.understanding==='no'?'Требуется помощь':'Не указано'),'','ОТВЕТЫ ПОЛЬЗОВАТЕЛЯ','Название добавки: '+(r.a.product||'Не указано'),'Компоненты: '+r.a.ingredients.map(x=>({zinc:'цинк',magnesium:'магний',vitaminK:'витамин K',other:'другие/неизвестно'})[x]).join(', '),'Принимаемые лекарства: '+(r.a.medNames||[r.a.rxDoxy?'Доксициклин':'',r.a.rxWarfarin?'Варфарин':''].filter(Boolean).join(', ')||'Не указаны'), 'Цинк из добавок: '+(r.total===null?'нет данных':r.total+' мг/сутки (пища не учтена)'),'','ИСТОЧНИКИ',...SOURCES[r.lesson].map(s=>s.title+': '+s.url),'','ВАЖНО: инструмент учебный, не диагностика и не полная проверка взаимодействий. Не отменяйте назначенное лечение самостоятельно.'];return things.join('\n');}
function downloadText(){const blob=new Blob(['\ufeff'+reportText()],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='pered_priemom_pamyatka.txt';link.style.display='none';document.body.append(link);link.click();setTimeout(()=>{URL.revokeObjectURL(url);link.remove();},1000);}

app.addEventListener('change',ev=>{const t=ev.target;
  if(t.dataset.key){a[t.dataset.key]=t.value; if(t.type==='text'||t.type==='number')return; if(t.dataset.key==='meds'&&a.meds!=='yes'){a.rxDoxy=false;a.rxWarfarin=false;a.medNames='';a.together='';} if(t.dataset.key==='other'&&a.other!=='yes'){a.duplicates='';a.zincExtra='';}render();}
  else if(t.dataset.ingredient){const key=t.dataset.ingredient; a.ingredients=t.checked?[...a.ingredients,key]:a.ingredients.filter(x=>x!==key);if(!hasIng('zinc')){a.zincMain='';a.zincExtra='';a.zincDuration='';}render();}
  else if(t.dataset.flag){a[t.dataset.flag]=t.checked;render();}
  else if(t.dataset.quiz!==undefined){quizPick=Number(t.dataset.quiz);render();}
});
app.addEventListener('input',ev=>{const t=ev.target;if(t.dataset.key){a[t.dataset.key]=t.value;}});
app.addEventListener('click',ev=>{const t=ev.target.closest('[data-action]');if(!t||t.disabled)return;const action=t.dataset.action;
  if(action==='start'||action==='restart'){restart();return;}
  if(action==='home'){screen='home';render();scrollTop();return;}
  if(action==='jump-cases'){document.querySelector('#cases')?.scrollIntoView({behavior:'smooth'});return;}
  if(action.startsWith('demo-')){setDemo(action.slice(5));return;}
  if(action==='next'){const errs=validate();if(errs.length){const slot=document.querySelector('#validation');if(slot){slot.innerHTML=errs.map(x=>'• '+e(x)).join('<br>');slot.classList.add('visible');slot.scrollIntoView({block:'nearest',behavior:'smooth'});}return;}step=Math.min(4,step+1);if(step===4){const d=detect();currentLesson=d.primary;quizPick=null;feedback='';}render();scrollTop();return;}
  if(action==='back'){if(step===4&&phase==='result'){phase='lesson';}else{step=Math.max(0,step-1);phase='lesson';}render();scrollTop();return;}
  if(action==='back-to-lesson'){phase='lesson';quizPick=null;feedback='';render();scrollTop();return;}
  if(action.startsWith('lesson-')){currentLesson=action.slice(7);quizPick=null;feedback='';render();return;}
  if(action.startsWith('understand-')){feedback=action.slice(11);render();return;}
  if(action==='skip'){phase='result';render();scrollTop();return;}
  if(action==='finish'){if(quizPick!==null&&feedback){phase='result';render();scrollTop();}return;}
  if(action==='download'){downloadText();return;}
  if(action==='print'){for(const details of document.querySelectorAll('.appendix'))details.open=true;window.print();return;}
});
document.querySelector('#nav-home')?.addEventListener('click',()=>{screen='home';render();scrollTop();});
document.querySelector('#brand')?.addEventListener('click',ev=>{ev.preventDefault();screen='home';render();scrollTop();});
render();