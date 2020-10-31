import $ from 'jquery';

/**
 * Add headers links.
 */
export class HeaderLink {
  /**
   * @param {!Object} container jQuery object.
   */
  constructor(container) {
    this.container = container;
  }

  /**
   * Add links to the specified headers.
   * @param {string} headerLocator Header jQuery lcoators.
   * @return {boolean} True - success, false - otherwise.
   */
  addLinkTo(headerLocator) {
    if (!headerLocator) {
      return false;
    }
    const headers = this.container.find(headerLocator);
    if (!headers.length) {
      return false;
    }
    headers.each((idx, headerEl) => {
      const $header = $(headerEl);
      if ($header.has('button[type=\'button\']').length) {
        return;
      }
      const button = $('<button type="button" ' +
        'class="clear button docs-heading-icon" />');
      button.attr('aria-label', 'Copy link to this ' +
        `section: ${$header.text()}`);
      $header.append(button);
    });
    return true;
  }
}
