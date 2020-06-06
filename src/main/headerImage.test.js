import $ from 'jquery';
import {showSiteLogo, loadHeaderImage} from './headerImage';

/**
 * Generates document body.
 * @param {string} containerId Container ID attribute value.
 * @return {string}
 */
const createMastHeadContainer = (containerId) => (
  `<div id="${containerId}"></div>`
);

const LOGO_CONTAINER_ID = 'logoContainer';

/**
 * Creates new site logo container.
 * @return {string} HTML element.
 */
const createLogoContainer = () => (
  $(`<div id="${LOGO_CONTAINER_ID}"></div>`)
);

describe('showSiteLogo', () => {
  const LOGO_CONTAINER_LOCATOR = `#${LOGO_CONTAINER_ID}`;

  let siteLogoContainerEl;

  beforeAll(() => {
    siteLogoContainerEl = createLogoContainer();
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  /**
   * Asserts whether logo is shown/hidden.
   * @param {Object} mastHeadContainerEl Mast head container jQuery object.
   * @param {boolean} show True - assert shown logo, false - assert hidden logo.
   * @param {string} mastHeadContainerId Mast head container ID for
   * assert msg purposes.
   */
  const assertLogoVisibility = (mastHeadContainerEl, show,
      mastHeadContainerId) => {
    try {
      const hasLogo = mastHeadContainerEl.has(LOGO_CONTAINER_LOCATOR);
      if (show) {
        expect(hasLogo.length)
            .toBeGreaterThan(0);
      } else {
        expect(hasLogo.length)
            .toBe(0);
      }
    } catch (err) {
      console.error(
          `Expect ${mastHeadContainerId} to ` +
        `${show ? '' : 'not '} contain ${LOGO_CONTAINER_ID}`,
      );
      throw err;
    }
  };

  test.each`
  currSiteLogo | show | currSiteLogoMsg
  ${undefined} | ${true} | ${'undefined site logo'}
  ${$(LOGO_CONTAINER_LOCATOR)} | ${true} | ${'empty site logo'}
  ${undefined} | ${false} | ${'undefined site logo'}
  ${$(LOGO_CONTAINER_LOCATOR)} | ${false} | ${'empty site logo'}
  `('show logo ($show) on initial page load with $currSiteLogoMsg',
      ({currSiteLogo, show}) => {
        const mastHeadContainerId = 'masthead';
        document.body.innerHTML = createMastHeadContainer(mastHeadContainerId);
        const mastHeadContainerEl = $(`#${mastHeadContainerId}`);

        showSiteLogo(mastHeadContainerEl, siteLogoContainerEl, currSiteLogo,
            show);

        assertLogoVisibility(mastHeadContainerEl, show, mastHeadContainerId);
      });

  test.each`
  show
  ${true}
  ${false}
  `('show logo ($show) when logo is already visible',
      ({show}) => {
        const mastHeadContainerId = 'masthead-no-image-header';
        document.body.innerHTML = createMastHeadContainer(mastHeadContainerId);
        const mastHeadContainerEl = $(`#${mastHeadContainerId}`);
        mastHeadContainerEl.append(siteLogoContainerEl);
        const currSiteLogo = $(LOGO_CONTAINER_LOCATOR);

        showSiteLogo(mastHeadContainerEl, siteLogoContainerEl, currSiteLogo,
            show);

        assertLogoVisibility(mastHeadContainerEl, show, mastHeadContainerId);
      });
});

describe('loadHeaderImage', () => {
  const IMG_BASE_URL = 'https://codemonkey.me/';
  const newImageObjects = () => ([
    {width: 1920, path: 'images/image1_1920_1080.webp'},
    {width: 768, path: 'images/image1_768_324.jpg'},
  ]);

  const IMAGES = newImageObjects();

  test('when img header container is not present', () => {
    document.body.innerHTML = '';
    const mastHeadImgContainers = [$('#masthead')];

    const success = loadHeaderImage(IMG_BASE_URL, IMAGES,
        mastHeadImgContainers);

    try {
      expect(success).toBe(false);
    } catch (err) {
      console.error('Expect loadHeaderImage to fail.');
    }
  });

  test('when img header container is present', () => {
    const mastHeadContainerId = 'masthead';
    document.body.innerHTML = createMastHeadContainer(mastHeadContainerId);
    const mastHeadContainerEl = $(`#${mastHeadContainerId}`);
    const mockBackstretchFn = jest.fn();
    mastHeadContainerEl.backstretch = mockBackstretchFn;
    const mastHeadImgContainers = [$('#bogusMastHeadId'), mastHeadContainerEl];

    const success = loadHeaderImage(IMG_BASE_URL, IMAGES,
        mastHeadImgContainers);

    try {
      expect(success).toBe(true);
    } catch (err) {
      console.error('Expect loadHeaderImage to fail.');
    }
    expect(mockBackstretchFn.mock.calls.length).toBe(1);
    const actualImgObjects = mockBackstretchFn.mock.calls[0][0];
    const actualImgItems = actualImgObjects[0];
    for (let idx = 0; idx < actualImgItems.length; idx++) {
      const currActualImg = actualImgItems[idx];
      const currExpectedImg = IMAGES[idx];
      expect(currActualImg.width).toBe(currExpectedImg.width);
      expect(currActualImg.url).toStartWith(IMG_BASE_URL);
      expect(currActualImg.url).toEndWith(currExpectedImg.path);
    }
  });
});
