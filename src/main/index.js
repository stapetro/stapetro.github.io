'use strict';

import $ from 'jquery';

require('imports-loader?$=jquery,jQuery=jquery!jquery-backstretch');
import 'what-input';

// clearing - https://get.foundation/sites/docs-v5/components/clearing.html
// topbar - https://get.foundation/sites/docs/responsive-navigation.html
// import {Accordion, DropDown, Equalizer, Magellan} from 'foundation-sites';
/*
Foundation JS relies on a global variable. In ES6, all imports are hoisted
to the top of the file so if we used `import` to import Foundation,
it would execute earlier than we have assigned the global variable.
This is why we have to use CommonJS require() here since it doesn't
have the hoisting behavior.
*/
// require('foundation-sites');
import 'foundation-sites';

$(document).foundation();
// Foundation.addToJquery($);

window.jQuery = $;
window.$ = $;
