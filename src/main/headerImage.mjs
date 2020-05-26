/**
 * Loads header image
 * @param {string} imgBaseUrl Base URL for images.
 * @param {Array<Object>} imgObjects Image objects.
 * @return {undefined}
 */
export function loadHeaderImage(imgBaseUrl, imgObjects) {
  const mastHeadPaths = ['#masthead', '#masthead-with-text'];
  const imgContainerJqueryObj = getImageContainer(mastHeadPaths);
  if (!imgContainerJqueryObj) {
    console.warn('masthead img container is not found!');
    return;
  }
  const imgObjectsForStretch = imgObjects.map((imgObj) => (
    {width: imgObj.width, url: `${imgBaseUrl}${imgObj.path}`}
  ));
  imgContainerJqueryObj.backstretch([imgObjectsForStretch], {fade: 700});
}

/**
 * Retrieve image container based on jquery paths.
 * @param {Array<string>} jQueryPaths jQuery locators.
 * @return {Object} jQuery object or undefined if not found.
 */
const getImageContainer = (jQueryPaths) => {
  for (const jQueryPath of jQueryPaths) {
    const currJqueryObject = $(jQueryPath);
    if (currJqueryObject.length) {
      return currJqueryObject;
    }
  }
  return undefined;
};

/**
 * Minimum width in pixels.
 * @type {number} Pixels value.
 */
export const MIN_WIDTH_PX = 640;

/**
 * Shows or hides site logo.
 * @param {string} mastHeadContainerId jQuery locator path
 * @param {string} htmlElem Html element content
 * @param {boolean} show true - adds html element, false - removes it.
 */
export function showSiteLogo(mastHeadContainerId, htmlElem, show) {
  const logoContainer = jQuery('#logoContainer');
  const logoContainerPresent = !!logoContainer.length;
  if (show) {
    if (!logoContainerPresent) {
      $(mastHeadContainerId).append(htmlElem);
    }
  } else if (logoContainerPresent) {
    logoContainer.remove();
  }
}
