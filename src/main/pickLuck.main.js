import {NoteViewer} from './pickLuck';

const rotateBtn = $('#rotateBtn');
const notesBox = $('.callout.luckAlert');

const noteViewer = new NoteViewer(rotateBtn, notesBox);
noteViewer.startRotate();
