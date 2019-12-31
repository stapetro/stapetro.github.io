/**
 * Note entity.
 */
class Note {
  /**
   *
   * @param {String} content
   * @param {String} author
   */
  constructor(content, author = undefined) {
    this.content = content;
    this.author = author;
  }

  /**
   *
   * @param {String} content
   * @param {String} author
   * @return {!Note} Note instance.
   */
  static newNote(content, author = undefined) {
    return new Note(content, author);
  }

  /**
   * Get html representation.
   * @return {string}
   */
  get html() {
    const contentHtml = `<p>${this.content}</p>`;
    if (!this.author) {
      return contentHtml;
    }
    const authorHtml = this.author ? this.author : '';
    const metaDataHtml = `<p>${authorHtml}<p>`;
    return contentHtml + metaDataHtml;
  }
}

/**
 * Take a note.
 */
class NoteTaker {
  /**
   *
   * @param {!Array<Note>} notes
   */
  constructor(notes) {
    this.notes = notes;
  }

  /**
   * Notes repository.
   * @return {!Array<Note>}
   */
  static generateNotes() {
    /* eslint-disable max-len */
    return [Note.newNote('Разходете се сред природата. Ще Ви се отрази добре.', undefined), Note.newNote('Пари', undefined),
      Note.newNote('Един човек сам за себе си е нищо. Двама души, които си принадлежат, заедно правят света.', 'Ханс Марголиус'),
      Note.newNote('Любов', undefined), Note.newNote('Нов приятел', undefined), Note.newNote('Запознанство', undefined), Note.newNote('Успех', undefined),
      Note.newNote('Когато се усмихвате на живота си, веднага започвате да живеете живот, за който си струва да се усмихвате.', undefined),
      Note.newNote('Ти си единственият човек на земята, който може да използва твоите възможности.', undefined), Note.newNote('Новина, вест', undefined),
      Note.newNote('Когато изпълваш живота на другите със светлина, не може да не бъдеш озарен и ти!', undefined), Note.newNote('Здраве', undefined),
      Note.newNote('Приятелите са важна съставка в рецептата на живота.', undefined), Note.newNote('Нов приятел', undefined),
      Note.newNote('Когато мислиш за положителни и хубави неща, ти ги привличаш към себе си.', undefined),
      Note.newNote('Най-добрите и красиви неща на света не могат да бъдат видяни, нито докоснати ... те се усещат в сърцето.', 'Хелън Келър'),
      Note.newNote('Човек е не където живее, а където обича.', 'латинска поговорка'),
      Note.newNote('Винаги, когато обръщаш на омразата с любов, ти обезсилваш омразата.', 'Уейн Дайър'),
      Note.newNote('Куфарите си стегни за пътешествие, до Генуа се приготви.', undefined),
      Note.newNote('Ако не можеш да намериш път - направи си сам.', undefined),
      Note.newNote('Промяната на Душата, е душата на всяка промяна.', 'Емерсон'),
      Note.newNote('Трънлив и зъл е на Живота ребуса. На кръст разпъва нашите души. Загубил всичко, не загубвай себе си. Единствено така ще го решиш.', 'Дамян Дамянов'),
      Note.newNote('Велики са тези, които разбират, че духовното е по-могъщо от каквато и да е материална сила и че мисълта управлява света.', undefined),
      Note.newNote('Ако съдбата ти затваря вратата, влез през прозореца.', undefined),
      Note.newNote('Истината не трябва да се казва така, че да я разберат. В нея трябва да повярват.', 'Уйлям Блейк'),
      Note.newNote('Този, който намира удоволствие в самотата, или е див звяр, или е Бог.', undefined),
      Note.newNote('Малка е ползата от очите, ако умът е сляп.', 'арабска пословица'),
      Note.newNote('Десетки свещи могат да се запалят от една, без да съкратят живота й. Щастието не намалява, ако се споделя.', 'Буда'),
      Note.newNote('Който иска да потуши страстите като ги задоволява, все едно гаси огън със слама.', undefined),
      Note.newNote('Не се присмивайте на човек, който прави две крачки назад, той може просто да се засилва.', undefined),
      Note.newNote('Постигането на душевно равновесие и хармония зависи от нас, от нашето желание да превъзмогнем притесненията, мрачните настроения и ниското самочувствие. Вярвай в себе си.', undefined),
      Note.newNote('Който се смее, вместо да беснее, е винаги по-силният.', undefined),
      Note.newNote('Ще живееш по-дълго, когато разбереш, че всеки момент, в който си се чувствал тъжен, е пропиляване на времето.', 'Рут Ренкел'),
      Note.newNote('Имаш нужната екипировка за успех - използвай я по предназначение.', undefined),
      Note.newNote('Направи добро - ще ти се върне.', undefined), Note.newNote('Сбъднати мечти.', undefined),
      Note.newNote('Радостни събития.', undefined), Note.newNote('Хубава изненада.', undefined),
      Note.newNote('Благоденствие.', undefined), Note.newNote('Любов и кашлица не се крият.', undefined),
      Note.newNote('Пада ти се днес парата - няма вече до заплата да се чудиш и се маеш как да свържеш двата края.', undefined),
      Note.newNote('Човекът не е направен, за да разбира живота, а за да го живее.', undefined),
      Note.newNote('В бизнеса постигаш завидни резултати.', undefined),
      Note.newNote('Очаква те радост безкрайно голяма - супер екскурзия в Европ за двама! И не забравяй, че трябва от чужбина подаръци за всички от сърце да има!', undefined),
      Note.newNote('Трябва да се покачиш на дървото, за да откъснеш плода.', undefined),
      Note.newNote('Със себе си съм имал повече проблеми, отколкото с всеки друг човек.', 'Дуайт Муди'),
      Note.newNote('Няма значение кой казва репликите, а кой суфлира / No matter who says lines, but who prompts.', undefined),
      Note.newNote('Време Ви е за купон.', undefined),
      Note.newNote('Ако си мислиш, че знаеш всичко, значи нещо ти убягва.', undefined),
      Note.newNote('Предстои Ви пътуване.', undefined), Note.newNote('Щастие.', undefined),
      Note.newNote('По-добре да бъдеш малка светлинка, отколкото голяма сянка.', undefined),
      Note.newNote('Най-същественото е невидимо за очите.', undefined), Note.newNote('Късмет.', undefined),
      Note.newNote('За две ръце протегнати насреща, земята бих до края извървял. За две очи, като звезди горещи, аз цялата си топлина бих дал.', undefined),
      Note.newNote('Дърво с дълбоки корени не се бои дори от най-силния вятър.', 'Конфуции'),
      Note.newNote('Безизходно положение няма! Това е пауза между две хрумвания.', undefined),
      Note.newNote('Ще е празник за душата, любов ще ти върти главата!', undefined),
      Note.newNote('След любовен световъртеж, ще вдигнеш ти годеж.', undefined),
      Note.newNote('Книгите вземи, в учението ще ти върви.', undefined),
      Note.newNote('Малко юначе в къщата ти ще проплаче.', undefined),
      Note.newNote('Здраве в изобилие и радост до безсилие.', undefined),
      Note.newNote('С нова хубава кола ще се возиш из града!', undefined),
      Note.newNote('Сватба ще има през тази година и тя ще бъде незабравима!', undefined),
      Note.newNote('Нов човек ще се роди.', undefined),
      Note.newNote('С градина, басейн и тераса, къща ще имаш от класа!', undefined),
      Note.newNote('Тази година булка и не чакай догодина, ами връзвай люлка.', undefined),
      Note.newNote('Колкото звезди по небето, толкова пари в портмонето.', undefined),
      Note.newNote('Споделена любов ще плени сърцето ти!', undefined),
      Note.newNote('За теб е веселие, нормалното ежедневие.', undefined),
      Note.newNote('Новата ти къща погледи ще връща, с обич напълни я и с любов стопли я!', undefined),
      Note.newNote('Животът ти ще е изпълнен с любов, енергия, радост, настроение!', undefined),
      Note.newNote('Позитивни промени.', undefined),
      Note.newNote('Мнодо добрини, ще сториш ти.', undefined),
      Note.newNote('Ще влезеш в елитен институт, с големи мозъци прочут!', undefined),
      Note.newNote('Добро здраве и сили.', undefined), Note.newNote('Успехи във всичко.', undefined),
      Note.newNote('Благословен живот.', undefined),
      Note.newNote('Иди учи, учи, учи.', undefined),
      Note.newNote('Ще завилнее пак душата - любов ще ти подкоси краката!', undefined),
      Note.newNote('Мир на земята.', undefined),
      Note.newNote('Незабравими приключения и пътешествия.', undefined),
      Note.newNote('Ще се сдобиеш с нещо ценно, опази го непременно.', undefined),
      Note.newNote('Ще си сред обич цял фонтан, ще се гмуркаш надълбоко в любовен океан!', undefined),
      Note.newNote('Работата ще е песен, а животът ти чудесен! На света се усмихни и грижите си забрави!', undefined),
      Note.newNote('Честити ще са дните, славата те следва по петите.', undefined),
      Note.newNote('Пътешествия екзотични, в топли държави различни.', undefined),
      Note.newNote('Ученето продължава цял живот.', undefined),
      Note.newNote('Смело стъпвай напред, късметът е с теб навред.', undefined),
      Note.newNote('Плюй си на петите и далече беж, че очаква те годеж!', undefined),
      Note.newNote('Нови проекти и смели мечти, залавяй се бързо, не чакай, не спи!', undefined),
      Note.newNote('Твоето най-голямо стремление е едно постоянно учение.', undefined),
      Note.newNote('Пада ти се здраве, но без много "Наздраве"!', undefined),
      Note.newNote('Ще си имащ бебче - пухкаво и бяло като хлебче!', undefined),
      Note.newNote('Животът е необикновено хубав, ако човек не се страхува от него и го приема с открита душа.', undefined),
      Note.newNote('Не се подчинявай на глупав човек и не взимай страната на силния.', 'Библейска мъдрост'),
      Note.newNote('Любов и щастие ще пълнят твойта гръд, и рози ще застилят твоят път.', undefined),
      Note.newNote('Ще откриеш бизнес нов и проблемът е готов.', undefined),
      Note.newNote('В живота нищо не се постига лесно, но за теб ще се подреди чудесно.', undefined),
      Note.newNote('Щура вечер ти се очертава, подготви се за забава.', undefined),
      Note.newNote('Змията винаги твърди, че хапе с лечебна цел. | The snake always claims that bites with curative intent.', undefined),
      Note.newNote('Провалът е само една добра възможност да започнеш всичко отначало. По по-разумен начин...', 'Хенри Форд'),
      Note.newNote('Странно нещо е животът - ако откажеш да приемеш друго, освен най-доброто, много често го получаваш.', 'Съмърсет Моъм'),
      Note.newNote('В чужда манджа сол не туряй.', undefined), Note.newNote('Покритото мляко, и котките не го лочат.', 'Българска поговорка'),
      Note.newNote('Имане без труд лесно се пилей.', undefined),
      Note.newNote('Човек е свободен, когато контролира себе си и не се опитва да контролира другите.', undefined),
      Note.newNote('Да бъдеш милостив и добър не е белег на слабост и отчаяние, а проява на сила и решителност.', undefined),
      Note.newNote('Някои хора са родени добри, други правят добро.', undefined),
      Note.newNote('През какво да преминем избира съдбата, но как да преминем избираме ние. | The destiny elects what to pass through, but we choose how to pass.', undefined),
      Note.newNote('Когато си се родил си плакал, докато другите около теб са се усмихвали. Живей и се усмихвай дори на другите да им се плаче.', undefined),
      Note.newNote('Никога, никога, никога, никога не се предавай.', 'Уинстън Чърчил'),
      Note.newNote('Добрите думи от приятели ни се струват кратки и лесно изречени, но ехото им е наистина безкрайно.', undefined),
      Note.newNote('Нов приятел.', undefined),
      Note.newNote('Работата се върши докато стане както трябва или докато се убедиш, че не може да стане така.', undefined),
      Note.newNote('За какво да живеем, ако не за да правим живота по-малко труден един за друг?', undefined),
      Note.newNote('Радостта не е във вещите, тя е в нас.', undefined),
      Note.newNote('Велики приключения очакват тези, които имат желание да завият зад ъгъла.', undefined),
      Note.newNote('Победата е винаги там, където има съгласие.', 'Сир'),
      Note.newNote('Прави повече от това да мислиш. Реализирай.', undefined),
      Note.newNote('Тайната да вървиш напред е да потеглиш.', undefined),
      Note.newNote('За плахия и колебаещия се, всичко е невъзможно, защото му изглежда така.', 'Сър Уолтър Скот'),
      Note.newNote('Чудесата ще започнат да стават, когато започнете да влагате повече енергия в мечтите си, отколкото в страховете си.', undefined),
      Note.newNote('Човек живее, колкото трябва, и умира, когато се съгласи.', 'Петър Димков'),
      Note.newNote('Хранете се, за да живеете, а не живейте, за да се храните.', 'Петър Димков'),
      Note.newNote('Ако посоката, в която си се запътил, ти носи радост, не питай какъв ще е пътят. Просто върви!', undefined),
    ];
    /* eslint-enable max-len */
  }

  /**
   *
   * @return {!Note} Randomly-picked note.
   */
  takeNote() {
    return NoteTaker.getRandomNote(this.notes);
  }

  /**
   *
   * @param {[]} arr Array
   * @return {*} Random item.
   */
  static getRandomNote(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };
}

/**
 * DOM manipulations in order to present the notes.
 */
export class NoteViewer {
  /* eslint-disable indent */
  /**
   * @param {!Object} pJquery Jquery object.
   * @param {!Object} rotateBtn jQuery object.
   * @param {!Object} noteDisplayBox jQuery object.
   * @param {!number} rotateIntervalMs
   * @param {Array<Note>} notes
   */
  constructor(pJquery, rotateBtn, noteDisplayBox,
    rotateIntervalMs = 100, notes = NoteTaker.generateNotes()) {
    // eslint-enable indent
    this.$ = pJquery;
    this.rotateIntervalMs = rotateIntervalMs;
    this.rotateBtn = rotateBtn;
    this.noteDisplayBox = noteDisplayBox;
    this.noteTaker = new NoteTaker(notes);
    this.timer = null;
  }

  // eslint-disable-next-line require-jsdoc
  displayNote() {
    const note = this.noteTaker.takeNote();
    this.noteDisplayBox.html(note.html);
  }

  /**
   * Public.
   * @return {undefined}
   */
  startRotate() {
    this.rotateBtnClickHandler = this.pickLuckyNote;
    this.rotateBtnLabel = 'Изтегли';
    this.rotateBtnTitle = 'Късметче си вземи';
    this.rotateNotes();
  }

  /**
   * Rotate notes continuously.
   */
  rotateNotes() {
    this.timer = window.setTimeout(() => {
      this.displayNote();
      window.clearTimeout(this.timer);
      this.rotateNotes();
    }, this.rotateIntervalMs);
  }

  // eslint-disable-next-line require-jsdoc
  pickLuckyNote() {
    window.clearTimeout(this.timer);
    this.rotateBtnClickHandler = this.startRotate;
    this.rotateBtnLabel = 'Старт';
    this.rotateBtnTitle = 'Натисни за следващо късметче';
  };

  /**
   * @param {String} btnLbl
   */
  set rotateBtnLabel(btnLbl) {
    this.rotateBtn.html(btnLbl);
  }

  /**
   * @param {String} btnTitle
   */
  set rotateBtnTitle(btnTitle) {
    this.rotateBtn.attr('title', btnTitle);
  }

  /**
   * @param {Function} handleFn
   */
  set rotateBtnClickHandler(handleFn) {
    this.rotateBtn.off('click');
    this.rotateBtn.click(this.$.proxy(handleFn, this));
  }
}
