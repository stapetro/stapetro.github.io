const $ = require('jquery');
import {NoteViewer} from './pickLuck';

/**
 * Generates document body.
 * @return {string}
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

// eslint-disable-next-line require-jsdoc
function verifyInstance(noteViewer, expectedRotateIntervalInMs) {
  expect(noteViewer).toBeDefined();
  expect(noteViewer.noteDisplayBox).toBe(notesBox);
  expect(noteViewer.rotateBtn).toBe(rotateBtn);
  expect(noteViewer.rotateIntervalMs).toBe(expectedRotateIntervalInMs);
  expect(noteViewer.timer).toBe(null);
  expect(noteViewer.noteTaker).toBeDefined();
}

/**
 * Generates fake notes.
 */
class NoteGenerator {
  /**
   * Creates a fake note.
   * @param {string} content
   * @param {string} author
   * @return {Object} Note object.
   */
  static newNote(content, author) {
    return {
      content,
      author,
      html: `${content}<->${author || ''}`,
      htmlWithFixedSizedTxt: `fixed ${content.substring(0, 3)}`,
    };
  }

  /**
   *
   * @return {{author: *, content: *}[]}
   */
  static generateNotes() {
    return [this.newNote('note'.padEnd(10, '*'), undefined),
      this.newNote('something else 1'.padEnd(10, '*'), 'note1 author')];
  }
}

describe('NoteViewer.constructor', () => {
  test('NoteViewer.constructor with default params', () => {
    const expectedRotateIntervalInMs = 100;

    const noteViewer = new NoteViewer(rotateBtn, notesBox);

    verifyInstance(noteViewer, expectedRotateIntervalInMs);
  });

  test('NoteViewer.constructor with particular params', () => {
    const expectedRotateIntervalInMs = 50;
    const notes = NoteGenerator.generateNotes();

    /* eslint-disable indent */
    const noteViewer = new NoteViewer(rotateBtn, notesBox,
      expectedRotateIntervalInMs, notes);
    /* eslint-enable indent */

    verifyInstance(noteViewer, expectedRotateIntervalInMs);
    expect(noteViewer.noteTaker.notes).toBe(notes);
  });
});

describe('NoteViewer API', () => {
  const expectedRotateIntervalInMs = 50;

  let noteViewer;

  beforeEach(() => {
    /* eslint-disable indent */
    noteViewer = new NoteViewer(rotateBtn, notesBox, expectedRotateIntervalInMs,
      NoteGenerator.generateNotes());
    /* eslint-enable indent */
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  const assertNotEmptyString = (txt) => {
    expect(txt).toBeDefined();
    expect(txt).not.toEqual('');
  };

  /* eslint-disable indent */
  /**
   *
   * @param {!String} pNotesBoxHtml
   * @param {!NoteViewer} pNoteViewer
   * @param {!Function} isNotePresentFn Is present predicate.
   */
  const assertCurrentNoteIsPresent = (pNotesBoxHtml, pNoteViewer,
    isNotePresentFn) => {
    /* eslint-enable indent */
    const notes = pNoteViewer.noteTaker.notes;
    const isNotePresent = isNotePresentFn(notes, pNotesBoxHtml);
    try {
      expect(isNotePresent).toBe(true);
    } catch (err) {
      console.error('pNotesBoxHtml', pNotesBoxHtml);
      console.error('notes', notes);
      throw err;
    }
  };

  /* eslint-disable max-len */
  /* eslint-disable indent */
  test.each`
    newNoteViewerFn | rotateIntervalInMs | condition
    ${() => noteViewer} | ${expectedRotateIntervalInMs} | ${'2 fake'}
    ${() => new NoteViewer(rotateBtn, notesBox)} | ${100} | ${'all production'}
    ${() => new NoteViewer(rotateBtn, notesBox, expectedRotateIntervalInMs, [NoteGenerator.generateNotes()[0]])} | ${expectedRotateIntervalInMs} | ${'1 no-author-fake'}
    `('NoteViewer.startRotate with $condition notes',
    ({newNoteViewerFn, rotateIntervalInMs}) => {
      /* eslint-enable indent */
      /* eslint-enable max-len */
      const noteViewerObj = newNoteViewerFn();

      noteViewerObj.startRotate();

      assertNotEmptyString(rotateBtn.prop('innerHTML'));
      assertNotEmptyString(rotateBtn.attr('title'));

      expect(setTimeout).toHaveBeenCalledTimes(1);
      /* eslint-disable indent */
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),
        rotateIntervalInMs);
      /* eslint-enable indent */

      jest.runOnlyPendingTimers();

      const actualNotesBoxHtml = notesBox.prop('innerHTML');
      assertNotEmptyString(actualNotesBoxHtml);
      const isNotePreviewPresent = (notes, pNotesBoxHtml) =>
        (notes.some((noteElem) => {
          return pNotesBoxHtml.indexOf(noteElem.htmlWithFixedSizedTxt) >= 0;
        }));
      /* eslint-disable indent */
      assertCurrentNoteIsPresent(
        actualNotesBoxHtml, noteViewerObj, isNotePreviewPresent,
      );

      expect(clearTimeout).toHaveBeenCalledTimes(1);
      expect(setTimeout).toHaveBeenCalledTimes(2);
      expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),
        rotateIntervalInMs);
      /* eslint-enable indent */
    });

  /* eslint-disable indent */
  test.each`
    newNoteViewerFn | condition
    ${() => noteViewer} | ${'2 fake'}
    ${() => new NoteViewer(rotateBtn, notesBox)} | ${'all production'}
     ${() => new NoteViewer(rotateBtn, notesBox, expectedRotateIntervalInMs,
    [NoteGenerator.generateNotes()[0]])} | ${'1 no-author-fake'}
    `('NoteViewer pick a lucky note from $condition notes',
    ({newNoteViewerFn}) => {
      const noteViewerObj = newNoteViewerFn();
      noteViewerObj.startRotate();
      jest.runOnlyPendingTimers();

      rotateBtn.click();

      assertNotEmptyString(rotateBtn.prop('innerHTML'));
      assertNotEmptyString(rotateBtn.attr('title'));
      const isNotePresent = (notes, pNotesBoxHtml) => {
        return notes.some((noteElem) => {
          const hasContent = pNotesBoxHtml.indexOf(noteElem.content) >= 0;
          let hasAuthor = true;
          if (noteElem.author) {
            hasAuthor = pNotesBoxHtml.indexOf(noteElem.author) >= 0;
          }
          return hasContent && hasAuthor;
        });
      };
      const actualNotesBoxHtml = notesBox.prop('innerHTML');
      assertCurrentNoteIsPresent(
        actualNotesBoxHtml, noteViewerObj, isNotePresent,
      );
      expect(setTimeout).toHaveBeenCalledTimes(2);
      expect(clearTimeout).toHaveBeenCalledTimes(2);
    });
  /* eslint-enable indent */
});
