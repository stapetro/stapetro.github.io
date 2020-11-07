'use strict';

import $ from 'jquery';
import 'what-input';

// <editor-fold desc="Foundation Sites">
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
// import 'foundation-sites';
/*
 * Below code is taken from
 * foundation-zurb-template/src/assets/js/lib/foundation-explicit-pieces.js
 * START
 */
import {Foundation} from 'foundation-sites/js/foundation.core';
import * as CoreUtils from 'foundation-sites/js/foundation.core.utils';
import {Box} from 'foundation-sites/js/foundation.util.box';
import {onImagesLoaded} from 'foundation-sites/js/foundation.util.imageLoader';
import {Keyboard} from 'foundation-sites/js/foundation.util.keyboard';
import {MediaQuery} from 'foundation-sites/js/foundation.util.mediaQuery';
import {Motion, Move} from 'foundation-sites/js/foundation.util.motion';
import {Nest} from 'foundation-sites/js/foundation.util.nest';
import {Timer} from 'foundation-sites/js/foundation.util.timer';
import {Touch} from 'foundation-sites/js/foundation.util.touch';
import {Triggers} from 'foundation-sites/js/foundation.util.triggers';
// import {Abide} from 'foundation-sites/js/foundation.abide';
import {Accordion} from 'foundation-sites/js/foundation.accordion';
// import {AccordionMenu} from 'foundation-sites/js/foundation.accordionMenu';
import {Drilldown} from 'foundation-sites/js/foundation.drilldown';
import {Dropdown} from 'foundation-sites/js/foundation.dropdown';
import {DropdownMenu} from 'foundation-sites/js/foundation.dropdownMenu';
// import {Equalizer} from 'foundation-sites/js/foundation.equalizer';
// import {Interchange} from 'foundation-sites/js/foundation.interchange';
import {Magellan} from 'foundation-sites/js/foundation.magellan';
// import {OffCanvas} from 'foundation-sites/js/foundation.offcanvas';
// import {Orbit} from 'foundation-sites/js/foundation.orbit';
import {ResponsiveMenu} from 'foundation-sites/js/foundation.responsiveMenu';
import {ResponsiveToggle}
  from 'foundation-sites/js/foundation.responsiveToggle';
// import {Reveal} from 'foundation-sites/js/foundation.reveal';
// import {Slider} from 'foundation-sites/js/foundation.slider';
import {SmoothScroll} from 'foundation-sites/js/foundation.smoothScroll';
import {Sticky} from 'foundation-sites/js/foundation.sticky';
// import {Tabs} from 'foundation-sites/js/foundation.tabs';
// import {Toggler} from 'foundation-sites/js/foundation.toggler';
import {Tooltip} from 'foundation-sites/js/foundation.tooltip';
// import {ResponsiveAccordionTabs}
//   from 'foundation-sites/js/foundation.responsiveAccordionTabs';

Foundation.addToJquery($);

// Add Foundation Utils to Foundation global namespace for backwards
// compatibility.
Foundation.rtl = CoreUtils.rtl;
Foundation.GetYoDigits = CoreUtils.GetYoDigits;
Foundation.transitionend = CoreUtils.transitionend;
Foundation.RegExpEscape = CoreUtils.RegExpEscape;
Foundation.onLoad = CoreUtils.onLoad;

Foundation.Box = Box;
Foundation.onImagesLoaded = onImagesLoaded;
Foundation.Keyboard = Keyboard;
Foundation.MediaQuery = MediaQuery;
Foundation.Motion = Motion;
Foundation.Move = Move;
Foundation.Nest = Nest;
Foundation.Timer = Timer;

// Touch and Triggers previously were almost purely side effect driven,
// so no need to add it to Foundation, just init them.
Touch.init($);
Triggers.init($, Foundation);
MediaQuery._init();

// Foundation.plugin(Abide, 'Abide');
Foundation.plugin(Accordion, 'Accordion');
// Foundation.plugin(AccordionMenu, 'AccordionMenu');
Foundation.plugin(Drilldown, 'Drilldown');
Foundation.plugin(Dropdown, 'Dropdown');
Foundation.plugin(DropdownMenu, 'DropdownMenu');
// Foundation.plugin(Equalizer, 'Equalizer');
// Foundation.plugin(Interchange, 'Interchange');
Foundation.plugin(Magellan, 'Magellan');
// Foundation.plugin(OffCanvas, 'OffCanvas');
// Foundation.plugin(Orbit, 'Orbit');
Foundation.plugin(ResponsiveMenu, 'ResponsiveMenu');
Foundation.plugin(ResponsiveToggle, 'ResponsiveToggle');
// Foundation.plugin(Reveal, 'Reveal');
// Foundation.plugin(Slider, 'Slider');
Foundation.plugin(SmoothScroll, 'SmoothScroll');
Foundation.plugin(Sticky, 'Sticky');
// Foundation.plugin(Tabs, 'Tabs');
// Foundation.plugin(Toggler, 'Toggler');
Foundation.plugin(Tooltip, 'Tooltip');
// Foundation.plugin(ResponsiveAccordionTabs, 'ResponsiveAccordionTabs');

/*
 * Below code is taken from
 * foundation-zurb-template/src/assets/js/lib/foundation-explicit-pieces.js
 * END
 */

$(document).foundation();
// </editor-fold>

window.jQuery = $;
window.$ = $;
// eslint-disable-next-line no-unused-vars
import jqueryBackstretch from
  // eslint-disable-next-line max-len
  'imports-loader?imports=default|jquery|jQuery&wrapper=window!jquery-backstretch';
