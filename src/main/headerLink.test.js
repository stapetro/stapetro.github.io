import $ from 'jquery';
import {HeaderLink} from './headerLink';

describe('add header link', () => {
  const CONTAINER_ID = 'div#postTop .cell.medium-9';
  const LOCATOR_DOCS_H1 = 'h1.docs-heading';
  let docsHTML;
  let headerLink;
  let container;

  const createDocsHtml = (withHeadings = true) => (
    /* eslint-disable max-len */
    `<div class="grid-container fluid">
    <div class="grid-x" id="postTop">
        <div class="cell medium-9">
            ${withHeadings ? '<h1 id="requirements" data-magellan-target="requirements" class="docs-heading">Requirements</h1>' : ''}
            <p>Test content.</p>
            ${withHeadings ? '<h1 id="hardware-specification" data-magellan-target="hardware-specification" class="docs-heading">Hardware specification</h1>' : ''}
            <p>I share directly a notebook model which complies very well...</p>
        </div>
        <div class="cell">
            <nav class="sticky docs-toc docs-toc-wrap is-anchored is-at-top"><h4 id="toc"> Table of
                Contents</h4>
                <ul class="vertical menu" data-magellan="d9rgbl-magellan" data-docs-toc="" id="markdown-toc"
                    data-resize="markdown-toc" data-scroll="markdown-toc" data-events="resize">
                    <li><a href="#requirements" id="markdown-toc-requirements" class="">Requirements</a></li>
                    <li><a href="#hardware-specification" id="markdown-toc-hardware-specification" class="">Hardware
                        specification</a></li>
                </ul>
                <hr class="docs-toc-divider small">
            </nav>
        </div>
    </div>
</div>
`);
  /* eslint-enable max-len */

  beforeAll(() => {
    docsHTML = createDocsHtml();
  });

  beforeEach(() => {
    document.body.innerHTML = docsHTML;
    container = $(CONTAINER_ID);
    headerLink = new HeaderLink(container);
  });

  const testAddLink = (headerLocator, expectedHeadersCount) => {
    expect(container.length).toBe(1);

    const success = headerLink.addLinkTo(headerLocator);

    expect(success).toBeTrue();
    const header = container.find(headerLocator);
    expect(header.length).toEqual(expectedHeadersCount);
    header.each((idx, headerEl) => {
      const $header = $(headerEl);
      const button = $header.find('button[type=\'button\']');
      expect(button.length).toBe(1);
      expect(button.attr('aria-label')).toInclude($header.text());
      expect(button.attr('data-clipboard-text'))
          .toInclude(`#${$header.attr('id')}`);
    });
  };

  test.each`
  headerLocator
  ${''}
  ${undefined}
  ${null}
  `('add link with $headerLocator header locator', ({headerLocator}) => {
    const success = headerLink.addLinkTo(headerLocator);

    expect(success).toBeFalse();
  });

  test('add h1 link initially', () => {
    testAddLink(LOCATOR_DOCS_H1, 2);
  });

  test('add link on existing header links', () => {
    const header = container.find(LOCATOR_DOCS_H1);
    expect(header.length).toBe(2);
    header.each((idx, el) => {
      const $headerEl = $(el);
      const button = $('<button type="button" />');
      button.attr('aria-label', `Test: ${$headerEl.text()}`);
      button.attr('data-clipboard-text', `#${$headerEl.attr('id')}`);
      $headerEl.append(button);
    });

    testAddLink(LOCATOR_DOCS_H1, 2);
  });

  test('add link to h1, h2', () => {
    const LOCATOR_DOCS_H2 = 'h2.docs-heading';
    const header2 = $('<h2 class="docs-heading">Test second lvl</h2>');
    container.append(header2);
    const headerLocator = `${LOCATOR_DOCS_H1}, ${LOCATOR_DOCS_H2}`;

    testAddLink(headerLocator, 3);
  });

  test('add link to no-headings html', () => {
    document.body.innerHTML = createDocsHtml(false);
    container = $(CONTAINER_ID);
    expect(container.length).toBe(1);
    headerLink = new HeaderLink(container);

    const success = headerLink.addLinkTo(LOCATOR_DOCS_H1);

    expect(success).toBeFalse();
    const heading = container.find(LOCATOR_DOCS_H1);
    expect(heading.length).toBe(0);
  });
});

describe('copy header link', () => {
  let fakeTooltipShow;
  let fakeTooltipHide;
  let fakeTooltipDestroy;
  let FakeTooltipClass;
  let $btn;
  let copyEvent;

  beforeAll(() => {
    fakeTooltipShow = jest.fn();
    fakeTooltipHide = jest.fn();
    fakeTooltipDestroy = jest.fn();
    FakeTooltipClass = jest.fn().mockImplementation(() => {
      return {
        show: fakeTooltipShow,
        hide: fakeTooltipHide,
        destroy: fakeTooltipDestroy,
      };
    });
    window.Foundation = {Tooltip: FakeTooltipClass};
    $btn = $('<button type="button" />');
    copyEvent = {
      action: 'copy', trigger: $btn[0], clearSelection: jest.fn(),
      text: undefined,
    };
  });

  beforeEach(() => {
    jest.useFakeTimers();
    fakeTooltipShow.mockClear();
    fakeTooltipHide.mockClear();
    fakeTooltipDestroy.mockClear();
    FakeTooltipClass.mockClear();
    copyEvent.clearSelection.mockClear();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  /**
   * Asserts copy link button.
   * @param {string} expectedBtnTitle Expected title value.
   */
  const assertCopyBtn = (expectedBtnTitle) => {
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect($btn.attr('title')).toEqual(expectedBtnTitle);
    expect(FakeTooltipClass.mock.calls.length).toBe(1);
    const actualBtn = FakeTooltipClass.mock.calls[0][0];
    expect(actualBtn).toEqual($btn);
    expect(fakeTooltipShow).toHaveBeenCalledTimes(1);

    jest.runOnlyPendingTimers();

    expect(fakeTooltipHide).toHaveBeenCalledTimes(1);
    expect(fakeTooltipDestroy).toHaveBeenCalledTimes(1);
    expect(copyEvent.clearSelection).toHaveBeenCalledTimes(1);
    expect($btn.attr('title')).toBeUndefined();
  };

  test('test successful copy event', () => {
    copyEvent.text = 'java4ever';

    HeaderLink.handleCopySuccess(copyEvent);

    const expectedBtnTitle = 'Copied';
    assertCopyBtn(expectedBtnTitle);
  });

  test('test failed copy event', () => {
    copyEvent.text = undefined;

    HeaderLink.handleCopyErr(copyEvent);

    const expectedBtnTitle = 'Copy Failed';
    assertCopyBtn(expectedBtnTitle);
  });
});
