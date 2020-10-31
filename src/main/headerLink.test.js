import $ from 'jquery';
import {HeaderLink} from './headerLink';

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

let docsHTML;

beforeAll(() => {
  docsHTML = createDocsHtml();
});

describe('add header link', () => {
  const CONTAINER_ID = 'div#postTop .cell.medium-9';
  const LOCATOR_DOCS_H1 = 'h1.docs-heading';
  let headerLink;
  let container;

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
