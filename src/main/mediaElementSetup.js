'use strict';

import 'mediaelement/full';

$('#mediaplayer').mediaelementplayer({
  // pluginPath: "/path/to/shims/",
  // When using jQuery's `mediaelementplayer`, an `instance` argument
  // is available in the `success` callback
  success: function(mediaElement, originalNode, instance) {
    // do things
  },
});
