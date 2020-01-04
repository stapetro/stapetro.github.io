!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);const n=60;class i{constructor(e,t){this.content=e,this.fixedSizedContent=e.length<=n?e.padEnd(n,`${e} `):e.substring(0,n),this.author=t}static newNote(e,t){return new i(e,t)}get html(){const e=`<p>${this.content}</p>`;return this.author?e+`<p>${this.author?this.author:""}<p>`:e}get htmlWithFixedSizedTxt(){return`<p>${this.fixedSizedContent}</p>`}}class w{constructor(e){this.notes=e}static generateNotes(){return[i.newNote("Разходете се сред природата. Ще Ви се отрази добре.",void 0),i.newNote("Пари",void 0),i.newNote("Един човек сам за себе си е нищо. Двама души, които си принадлежат, заедно правят света.","Ханс Марголиус"),i.newNote("Любов",void 0),i.newNote("Нов приятел",void 0),i.newNote("Запознанство",void 0),i.newNote("Успех",void 0),i.newNote("Когато се усмихвате на живота си, веднага започвате да живеете живот, за който си струва да се усмихвате.",void 0),i.newNote("Ти си единственият човек на земята, който може да използва твоите възможности.",void 0),i.newNote("Новина, вест",void 0),i.newNote("Когато изпълваш живота на другите със светлина, не може да не бъдеш озарен и ти!",void 0),i.newNote("Здраве",void 0),i.newNote("Приятелите са важна съставка в рецептата на живота.",void 0),i.newNote("Нов приятел",void 0),i.newNote("Когато мислиш за положителни и хубави неща, ти ги привличаш към себе си.",void 0),i.newNote("Най-добрите и красиви неща на света не могат да бъдат видяни, нито докоснати ... те се усещат в сърцето.","Хелън Келър"),i.newNote("Човек е не където живее, а където обича.","латинска поговорка"),i.newNote("Винаги, когато обръщаш на омразата с любов, ти обезсилваш омразата.","Уейн Дайър"),i.newNote("Куфарите си стегни за пътешествие, до Генуа се приготви.",void 0),i.newNote("Ако не можеш да намериш път - направи си сам.",void 0),i.newNote("Промяната на Душата, е душата на всяка промяна.","Емерсон"),i.newNote("Трънлив и зъл е на Живота ребуса. На кръст разпъва нашите души. Загубил всичко, не загубвай себе си. Единствено така ще го решиш.","Дамян Дамянов"),i.newNote("Велики са тези, които разбират, че духовното е по-могъщо от каквато и да е материална сила и че мисълта управлява света.",void 0),i.newNote("Ако съдбата ти затваря вратата, влез през прозореца.",void 0),i.newNote("Истината не трябва да се казва така, че да я разберат. В нея трябва да повярват.","Уйлям Блейк"),i.newNote("Този, който намира удоволствие в самотата, или е див звяр, или е Бог.",void 0),i.newNote("Малка е ползата от очите, ако умът е сляп.","арабска пословица"),i.newNote("Десетки свещи могат да се запалят от една, без да съкратят живота й. Щастието не намалява, ако се споделя.","Буда"),i.newNote("Който иска да потуши страстите като ги задоволява, все едно гаси огън със слама.",void 0),i.newNote("Не се присмивайте на човек, който прави две крачки назад, той може просто да се засилва.",void 0),i.newNote("Постигането на душевно равновесие и хармония зависи от нас, от нашето желание да превъзмогнем притесненията, мрачните настроения и ниското самочувствие. Вярвай в себе си.",void 0),i.newNote("Който се смее, вместо да беснее, е винаги по-силният.",void 0),i.newNote("Ще живееш по-дълго, когато разбереш, че всеки момент, в който си се чувствал тъжен, е пропиляване на времето.","Рут Ренкел"),i.newNote("Имаш нужната екипировка за успех - използвай я по предназначение.",void 0),i.newNote("Направи добро - ще ти се върне.",void 0),i.newNote("Сбъднати мечти.",void 0),i.newNote("Радостни събития.",void 0),i.newNote("Хубава изненада.",void 0),i.newNote("Благоденствие.",void 0),i.newNote("Любов и кашлица не се крият.",void 0),i.newNote("Пада ти се днес парата - няма вече до заплата да се чудиш и се маеш как да свържеш двата края.",void 0),i.newNote("Човекът не е направен, за да разбира живота, а за да го живее.",void 0),i.newNote("В бизнеса постигаш завидни резултати.",void 0),i.newNote("Очаква те радост безкрайно голяма - супер екскурзия в Европ за двама! И не забравяй, че трябва от чужбина подаръци за всички от сърце да има!",void 0),i.newNote("Трябва да се покачиш на дървото, за да откъснеш плода.",void 0),i.newNote("Със себе си съм имал повече проблеми, отколкото с всеки друг човек.","Дуайт Муди"),i.newNote("Няма значение кой казва репликите, а кой суфлира / No matter who says lines, but who prompts.",void 0),i.newNote("Време Ви е за купон.",void 0),i.newNote("Ако си мислиш, че знаеш всичко, значи нещо ти убягва.",void 0),i.newNote("Предстои Ви пътуване.",void 0),i.newNote("Щастие.",void 0),i.newNote("По-добре да бъдеш малка светлинка, отколкото голяма сянка.",void 0),i.newNote("Най-същественото е невидимо за очите.",void 0),i.newNote("Късмет.",void 0),i.newNote("За две ръце протегнати насреща, земята бих до края извървял. За две очи, като звезди горещи, аз цялата си топлина бих дал.",void 0),i.newNote("Дърво с дълбоки корени не се бои дори от най-силния вятър.","Конфуции"),i.newNote("Безизходно положение няма! Това е пауза между две хрумвания.",void 0),i.newNote("Ще е празник за душата, любов ще ти върти главата!",void 0),i.newNote("След любовен световъртеж, ще вдигнеш ти годеж.",void 0),i.newNote("Книгите вземи, в учението ще ти върви.",void 0),i.newNote("Малко юначе в къщата ти ще проплаче.",void 0),i.newNote("Здраве в изобилие и радост до безсилие.",void 0),i.newNote("С нова хубава кола ще се возиш из града!",void 0),i.newNote("Сватба ще има през тази година и тя ще бъде незабравима!",void 0),i.newNote("Нов човек ще се роди.",void 0),i.newNote("С градина, басейн и тераса, къща ще имаш от класа!",void 0),i.newNote("Тази година булка и не чакай догодина, ами връзвай люлка.",void 0),i.newNote("Колкото звезди по небето, толкова пари в портмонето.",void 0),i.newNote("Споделена любов ще плени сърцето ти!",void 0),i.newNote("За теб е веселие, нормалното ежедневие.",void 0),i.newNote("Новата ти къща погледи ще връща, с обич напълни я и с любов стопли я!",void 0),i.newNote("Животът ти ще е изпълнен с любов, енергия, радост, настроение!",void 0),i.newNote("Позитивни промени.",void 0),i.newNote("Мнодо добрини, ще сториш ти.",void 0),i.newNote("Ще влезеш в елитен институт, с големи мозъци прочут!",void 0),i.newNote("Добро здраве и сили.",void 0),i.newNote("Успехи във всичко.",void 0),i.newNote("Благословен живот.",void 0),i.newNote("Иди учи, учи, учи.",void 0),i.newNote("Ще завилнее пак душата - любов ще ти подкоси краката!",void 0),i.newNote("Мир на земята.",void 0),i.newNote("Незабравими приключения и пътешествия.",void 0),i.newNote("Ще се сдобиеш с нещо ценно, опази го непременно.",void 0),i.newNote("Ще си сред обич цял фонтан, ще се гмуркаш надълбоко в любовен океан!",void 0),i.newNote("Работата ще е песен, а животът ти чудесен! На света се усмихни и грижите си забрави!",void 0),i.newNote("Честити ще са дните, славата те следва по петите.",void 0),i.newNote("Пътешествия екзотични, в топли държави различни.",void 0),i.newNote("Ученето продължава цял живот.",void 0),i.newNote("Смело стъпвай напред, късметът е с теб навред.",void 0),i.newNote("Плюй си на петите и далече беж, че очаква те годеж!",void 0),i.newNote("Нови проекти и смели мечти, залавяй се бързо, не чакай, не спи!",void 0),i.newNote("Твоето най-голямо стремление е едно постоянно учение.",void 0),i.newNote('Пада ти се здраве, но без много "Наздраве"!',void 0),i.newNote("Ще си имащ бебче - пухкаво и бяло като хлебче!",void 0),i.newNote("Животът е необикновено хубав, ако човек не се страхува от него и го приема с открита душа.",void 0),i.newNote("Не се подчинявай на глупав човек и не взимай страната на силния.","Библейска мъдрост"),i.newNote("Любов и щастие ще пълнят твойта гръд, и рози ще застилят твоят път.",void 0),i.newNote("Ще откриеш бизнес нов и проблемът е готов.",void 0),i.newNote("В живота нищо не се постига лесно, но за теб ще се подреди чудесно.",void 0),i.newNote("Щура вечер ти се очертава, подготви се за забава.",void 0),i.newNote("Змията винаги твърди, че хапе с лечебна цел. | The snake always claims that bites with curative intent.",void 0),i.newNote("Провалът е само една добра възможност да започнеш всичко отначало. По по-разумен начин...","Хенри Форд"),i.newNote("Странно нещо е животът - ако откажеш да приемеш друго, освен най-доброто, много често го получаваш.","Съмърсет Моъм"),i.newNote("В чужда манджа сол не туряй.",void 0),i.newNote("Покритото мляко, и котките не го лочат.","Българска поговорка"),i.newNote("Имане без труд лесно се пилей.",void 0),i.newNote("Човек е свободен, когато контролира себе си и не се опитва да контролира другите.",void 0),i.newNote("Да бъдеш милостив и добър не е белег на слабост и отчаяние, а проява на сила и решителност.",void 0),i.newNote("Някои хора са родени добри, други правят добро.",void 0),i.newNote("През какво да преминем избира съдбата, но как да преминем избираме ние. | The destiny elects what to pass through, but we choose how to pass.",void 0),i.newNote("Когато си се родил си плакал, докато другите около теб са се усмихвали. Живей и се усмихвай дори на другите да им се плаче.",void 0),i.newNote("Никога, никога, никога, никога не се предавай.","Уинстън Чърчил"),i.newNote("Добрите думи от приятели ни се струват кратки и лесно изречени, но ехото им е наистина безкрайно.",void 0),i.newNote("Нов приятел.",void 0),i.newNote("Работата се върши докато стане както трябва или докато се убедиш, че не може да стане така.",void 0),i.newNote("За какво да живеем, ако не за да правим живота по-малко труден един за друг?",void 0),i.newNote("Радостта не е във вещите, тя е в нас.",void 0),i.newNote("Велики приключения очакват тези, които имат желание да завият зад ъгъла.",void 0),i.newNote("Победата е винаги там, където има съгласие.","Сир"),i.newNote("Прави повече от това да мислиш. Реализирай.",void 0),i.newNote("Тайната да вървиш напред е да потеглиш.",void 0),i.newNote("За плахия и колебаещия се, всичко е невъзможно, защото му изглежда така.","Сър Уолтър Скот"),i.newNote("Чудесата ще започнат да стават, когато започнете да влагате повече енергия в мечтите си, отколкото в страховете си.",void 0),i.newNote("Човек живее, колкото трябва, и умира, когато се съгласи.","Петър Димков"),i.newNote("Хранете се, за да живеете, а не живейте, за да се храните.","Петър Димков"),i.newNote("Ако посоката, в която си се запътил, ти носи радост, не питай какъв ще е пътят. Просто върви!",void 0),i.newNote("Луд умора няма.","Българска поговорка"),i.newNote("Барабар Петко с мъжете.","Българска поговорка"),i.newNote("Щастието е само на една мисъл разстояние.",void 0),i.newNote("Слабите хора чакат да настъпи благоприятно обстоятелство, силните го създават.",void 0),i.newNote("Не се учи как да станеш богат, учи се как да станеш щастлив.",void 0),i.newNote("Кефът цена няма, ама струва пари.","Бат' Жоро"),i.newNote("Насила хубост не става.","Българска поговорка"),i.newNote("Кое е по-важно за успеха - талантът или труда? А кое колело на велосипеда е по-важно - предното или задното?. | What is more important for success - the talent or the labor? And which wheel of the bicycle is more important - the front or the rear one?",void 0),i.newNote("Можем ли да освободим света от злосторници? Вероятно толкова, колкото и да го населим със Светци. | Can we rid the world of evildoers? Probably as much as to populate it with saints.","Тома Томов | Toma Tomov")]}takeNote(){return w.getRandomNote(this.notes)}static getRandomNote(e){return e[Math.floor(Math.random()*e.length)]}}new class{constructor(e,t,o=100,n=w.generateNotes()){this.rotateIntervalMs=o,this.rotateBtn=e,this.noteDisplayBox=t,this.noteTaker=new w(n),this.timer=null,this.currentNote=null}displayNote(){this.noteDisplayBox.html(this.currentNote.html)}displayNotePreview(){this.currentNote=this.noteTaker.takeNote(),this.noteDisplayBox.html(this.currentNote.htmlWithFixedSizedTxt)}startRotate(e){this.rotateBtnClickHandler=this.pickLuckyNote,this.rotateBtnLabel="Изтегли",this.rotateBtnTitle="Късметче си вземи",this.currentNote=null,this.rotateNotes()}rotateNotes(){this.timer=window.setTimeout(()=>{this.displayNotePreview(),window.clearTimeout(this.timer),this.rotateNotes()},this.rotateIntervalMs)}pickLuckyNote(e){window.clearTimeout(this.timer),this.displayNote(),this.rotateBtnClickHandler=this.startRotate,this.rotateBtnLabel="Старт",this.rotateBtnTitle="Натисни за следващо късметче"}set rotateBtnLabel(e){this.rotateBtn.html(e)}set rotateBtnTitle(e){this.rotateBtn.attr("title",e)}set rotateBtnClickHandler(e){this.rotateBtn.off("click"),this.rotateBtn.click(e.bind(this))}}($("#rotateBtn"),$(".alert-box.info")).startRotate()}]);
//# sourceMappingURL=pickLuck.js.map