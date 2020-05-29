/**
 * Loads header image
 * @param {string} imgBaseUrl Base URL for images.
 * @param {Array<Object>} imgObjects Image objects.
 * @param {Array<Object>} mastHeadImgContainers List of jQuery objects.
 * @return {boolean} True - success, false - otherwise.
 */
export function loadHeaderImage(imgBaseUrl, imgObjects, mastHeadImgContainers) {
  const imgContainerJqueryObj = getImageContainer(mastHeadImgContainers);
  if (!imgContainerJqueryObj) {
    console.warn('masthead img container is not found!');
    return false;
  }
  const imgObjectsForStretch = imgObjects.map((imgObj) => (
    {width: imgObj.width, url: `${imgBaseUrl}${imgObj.path}`}
  ));
  imgContainerJqueryObj.backstretch([imgObjectsForStretch], {fade: 700});
  return true;
}

/**
 * Retrieve image container based on jquery paths.
 * @param {Array<Object>} jQueryObjects jQuery objects.
 * @return {Object} jQuery object or undefined if not found.
 */
const getImageContainer = (jQueryObjects) => {
  for (const jQueryPath of jQueryObjects) {
    if (jQueryPath.length > 0) {
      return jQueryPath;
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
 * @param {Object} mastHeadContainerEl jQuery object
 * @param {Object} siteLogoEl jQuery object
 * @param {Object} currentSiteLogoEl jQuery object Current site logo
 * found by ID.
 * @param {boolean} show true - adds html element, false - removes it.
 */
export function showSiteLogo(mastHeadContainerEl, siteLogoEl,
    currentSiteLogoEl, show) {
  const logoContainerPresent = currentSiteLogoEl &&
    currentSiteLogoEl.length > 0;
  if (show) {
    if (logoContainerPresent) {
      return;
    }
    mastHeadContainerEl.append(siteLogoEl);
  } else if (logoContainerPresent) {
    currentSiteLogoEl.remove();
  }
}
