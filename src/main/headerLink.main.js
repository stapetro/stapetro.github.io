import $ from 'jquery';
import {HeaderLink} from './headerLink';

$(window).on('load', () => {
  const docContainer = $('div#postTop .cell.medium-9');
  const headerLink = new HeaderLink(docContainer);
  headerLink.addLinkTo('h1.docs-heading');
});
