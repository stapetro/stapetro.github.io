import {NoteViewer} from './pickLuck';

const rotateBtn = $('#rotateBtn');
const notesBox = $('.alert-box.callout.luckAlert');

const noteViewer = new NoteViewer(rotateBtn, notesBox);
noteViewer.startRotate();
