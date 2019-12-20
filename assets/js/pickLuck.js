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
     */
    static newNote(content, author = undefined) {
        return new Note(content, author);
    }

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

class NoteTaker {
    /**
     * 
     * @param {!Array<Note>} notes 
     */
    constructor(notes) {
        this.notes = notes;
    }

    static generateNotes() {
        const notes = Array(Note.newNote('Разходете се сред природата. Ще Ви се отрази добре.', undefined), Note.newNote('Пари', undefined),
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
            Note.newNote('Ще живееш по-дълго, когато разбереш, че всеки момент, в който си се чувствал тъжен, е пропиляване на времето.', 'Рут Ренкел')
        );
        // NoteTaker.addBogusItems(notes);
        return notes;
    }

    /**
     * 
     * @param {Array<Note>} notes 
     */
    static addBogusItems(notes) {
        const currLen = notes.length;
        for (let idx = 0; idx <= 5000; idx++) {
            const currNote = notes[idx % currLen];
            notes.push(new Note(currNote.content + ' - ' + idx, currNote.author, currNote.source));
        }
    }

    /**
     * 
     * @returns {!Note} Randomly-picked note.
     */
    takeNote() {
        return NoteTaker.getRandomNote(this.notes);
    }

    static getRandomNote(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    };
}

export class NoteViewer {
    /**
     * 
     * @param {!Object} rotateBtn jQuery object.
     * @param {!Object} noteDisplayBox jQuery object.
     * @param {!number} rotateIntervalMs 
     * @param {Array<Note>} notes 
     */
    constructor(rotateBtn, noteDisplayBox, rotateIntervalMs = 100, notes = NoteTaker.generateNotes()) {
        this.rotateIntervalMs = rotateIntervalMs;
        this.rotateBtn = rotateBtn;
        this.noteDisplayBox = noteDisplayBox;
        this.noteTaker = new NoteTaker(notes);
        this.timer = null;
    }

    displayNote() {
        const note = this.noteTaker.takeNote();
        this.noteDisplayBox.html(note.html);
    }

    startRotate() {
        this.rotateBtnClickHandler = this.pickLuckyNote;
        this.rotateBtnLabel = 'Изтегли';
        this.rotateBtnTitle = 'Късметче си вземи';
        this.rotateNotes();
    }

    rotateNotes() {
        this.timer = window.setTimeout(() => {
            this.displayNote();
            window.clearTimeout(this.timer);
            this.rotateNotes();
        }, this.rotateIntervalMs);
    }

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
        this.rotateBtn.click($.proxy(handleFn, this));
    }
}