import $ from 'jquery';
import ClipboardJS from 'clipboard';

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
   * @param {string} headerLocator Header jQuery locators.
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
    const headerBtnSelector = 'button[type=\'button\']';
    headers.each((idx, headerEl) => {
      const $header = $(headerEl);
      if ($header.has(headerBtnSelector).length) {
        return;
      }
      const button = $('<button type="button" data-tooltip ' +
        'class="clear button docs-heading-icon right" />')
          .attr('aria-label', 'Copy link to this ' +
          `section: ${$header.text()}`)
          .attr('data-clipboard-text',
              `${window.location.href}#${$header.attr('id')}`)
          .attr('data-position', 'right')
          .attr('data-alignment', 'center');
      $header.append(button);
    });
    this.addCopyToClipboardToHeaderLinkButtons(headerBtnSelector);
    return true;
  }

  /**
   * Hook clipboard lib to the specified buttons.
   * @param {string} headerBtnSelector
   */
  addCopyToClipboardToHeaderLinkButtons(headerBtnSelector) {
    const clipboard = new ClipboardJS(headerBtnSelector);
    clipboard.on('success', HeaderLink.handleCopySuccess);
    clipboard.on('error', HeaderLink.handleCopyErr);
  }

  /**
   * Triggers on successful copy.
   * @param {!Object} e clipboard copy event.
   */
  static handleCopySuccess(e) {
    console.debug('Action:', e.action);
    console.debug('Trigger:', e.trigger);
    console.debug('Text:', e.text);

    const $btn = $(e.trigger);
    $btn.attr('title', 'Copied');
    HeaderLink.addTooltip($btn, e);
  }

  /**
   * Triggers on failed copy.
   * @param {!Object} e clipboard copy event.
   */
  static handleCopyErr(e) {
    console.debug('Action:', e.action);
    console.debug('Trigger:', e.trigger);

    const $btn = $(e.trigger);
    $btn.attr('title', 'Copy Failed');
    HeaderLink.addTooltip($btn, e);
  }

  /**
   * Adds tooltip title to the specified button.
   * @param {!Object} $btn jQuery button object.
   * @param {!Object} copyEvent Copy event object.
   */
  static addTooltip($btn, copyEvent) {
    const tooltipOptions = {disableHover: true, clickOpen: false};
    let btnTooltip = new Foundation.Tooltip($btn, tooltipOptions);
    btnTooltip.show();
    setTimeout(function() {
      btnTooltip.hide();
      btnTooltip.destroy();
      btnTooltip = undefined;
      $btn.removeAttr('title');
      copyEvent.clearSelection();
    }, 1000);
  }
}
