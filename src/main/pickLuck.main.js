import {NoteViewer} from './pickLuck';

/*
 * IIFE because webpack 4 cannot output es6 importable bundle yet
 * @issue
 */
(function() {
  const rotateBtn = $('#rotateBtn');
  const notesBox = $('.alert-box.info');

  const noteViewer = new NoteViewer($, rotateBtn, notesBox);
  noteViewer.startRotate();
})();
