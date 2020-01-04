import {NoteViewer} from './pickLuck';

const rotateBtn = $('#rotateBtn');
const notesBox = $('.alert-box.info');

const noteViewer = new NoteViewer(rotateBtn, notesBox);
noteViewer.startRotate();
