import $ from 'jquery';
import {NoteViewer} from './pickLuck.mjs';

const rotateBtn = $('#rotateBtn');
const notesBox = $('.callout.luckAlert');

const noteViewer = new NoteViewer(rotateBtn, notesBox);
noteViewer.startRotate();
