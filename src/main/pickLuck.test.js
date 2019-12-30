const $ = require('jquery');
import {NoteViewer} from './pickLuck'

/**
 * Generates document body.
 * @returns {string}
 */
const createLuckyHtml = () => (
    `<div itemprop="articleSection">
    <p>
        <button type="button" id="rotateBtn" class="radius button"></button>
    </p>
    <div class="alert-box info "></div>
</div>
`);

beforeAll(() => {
    document.body.innerHTML = createLuckyHtml();
});

let rotateBtn;
let notesBox;

beforeEach(() => {
    rotateBtn = $('#rotateBtn');
    notesBox = $('.alert-box.info');
});

function verifyInstance(noteViewer, expectedRotateIntervalInMs) {
    expect(noteViewer).toBeDefined();
    expect(noteViewer.noteDisplayBox).toBe(notesBox);
    expect(noteViewer.rotateBtn).toBe(rotateBtn);
    expect(noteViewer.rotateIntervalMs).toBe(expectedRotateIntervalInMs);
    expect(noteViewer.timer).toBe(null);
    expect(noteViewer.noteTaker).toBeDefined();
}

class NoteGenerator {
    static newNote(content, author) {
        return {content, author, html: `${content}<->${author || ''}`};
    }

    /**
     *
     * @returns {{author: *, content: *}[]}
     */
    static generateNotes() {
        return Array(this.newNote('note', undefined),
            this.newNote('note1', 'note1 author'));
    }
}

describe('NoteViewer.constructor', () => {
    test('NoteViewer.constructor with default params', () => {
        const expectedRotateIntervalInMs = 100;

        const noteViewer = new NoteViewer($, rotateBtn, notesBox);

        verifyInstance(noteViewer, expectedRotateIntervalInMs);
    });

    test('NoteViewer.constructor with particular params', () => {
        const expectedRotateIntervalInMs = 50;
        const notes = NoteGenerator.generateNotes();

        const noteViewer = new NoteViewer($, rotateBtn, notesBox, expectedRotateIntervalInMs, notes);

        verifyInstance(noteViewer, expectedRotateIntervalInMs);
        expect(noteViewer.noteTaker.notes).toBe(notes);
    });
});

describe('NoteViewer API', () => {
    const expectedRotateIntervalInMs = 50;

    let noteViewer;

    beforeEach(() => {
        noteViewer = new NoteViewer($, rotateBtn, notesBox, expectedRotateIntervalInMs, NoteGenerator.generateNotes());
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.clearAllTimers();
    });

    const assertNotEmptyString = (txt) => {
        expect(txt).toBeDefined();
        expect(txt).not.toEqual('');
    };

    /**
     *
     * @param {!String} pNotesBoxHtml
     * @param {!NoteViewer} pNoteViewer
     */
    const assertPickedNoteIsPresent = (pNotesBoxHtml, pNoteViewer) => {
        const notes = pNoteViewer.noteTaker.notes;
        const isPickedNotePresent = notes.some(noteElem => {
            const hasContent = pNotesBoxHtml.indexOf(noteElem.content) >= 0;
            let hasAuthor = true;
            if (noteElem.author) {
                hasAuthor = pNotesBoxHtml.indexOf(noteElem.author) >= 0;
            }
            return hasContent && hasAuthor;
        });
        try {
            expect(isPickedNotePresent).toBe(true);
        } catch (err) {
            console.error('pNotesBoxHtml', pNotesBoxHtml);
            console.error('notes', notes);
            throw err;
        }

    };

    test.each`
    newNoteViewerFn | rotateIntervalInMs | condition
    ${() => noteViewer} | ${expectedRotateIntervalInMs} | ${'2 fake'}
    ${() => new NoteViewer($, rotateBtn, notesBox)} | ${100} | ${'all production'}
    ${() => new NoteViewer($, rotateBtn, notesBox, expectedRotateIntervalInMs,
        Array(NoteGenerator.generateNotes()[0]))} | ${expectedRotateIntervalInMs} | ${'1 no-author-fake'}
    `('NoteViewer.startRotate with $condition notes',
        ({newNoteViewerFn, rotateIntervalInMs}) => {
            const noteViewerObj = newNoteViewerFn();

            noteViewerObj.startRotate();

            assertNotEmptyString(rotateBtn.prop('innerHTML'));
            assertNotEmptyString(rotateBtn.attr('title'));

            expect(setTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), rotateIntervalInMs);

            jest.runOnlyPendingTimers();

            const actualNotesBoxHtml = notesBox.prop('innerHTML');
            assertNotEmptyString(actualNotesBoxHtml);
            assertPickedNoteIsPresent(actualNotesBoxHtml, noteViewerObj);

            expect(clearTimeout).toHaveBeenCalledTimes(1);
            expect(setTimeout).toHaveBeenCalledTimes(2);
            expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), rotateIntervalInMs);
        });

    test.each`
    newNoteViewerFn | condition
    ${() => noteViewer} | ${'2 fake'}
    ${() => new NoteViewer($, rotateBtn, notesBox)} | ${'all production'}
     ${() => new NoteViewer($, rotateBtn, notesBox, expectedRotateIntervalInMs,
        Array(NoteGenerator.generateNotes()[0]))} | ${'1 no-author-fake'}
    `('NoteViewer pick a lucky note from $condition notes', ({newNoteViewerFn}) => {
        const noteViewerObj = newNoteViewerFn();
        noteViewerObj.startRotate();
        jest.runOnlyPendingTimers();

        rotateBtn.click();

        assertNotEmptyString(rotateBtn.prop('innerHTML'));
        assertNotEmptyString(rotateBtn.attr('title'));
        expect(setTimeout).toHaveBeenCalledTimes(2);
        expect(clearTimeout).toHaveBeenCalledTimes(2);
    });
});
