const BaseSeoRule = require("./base-seo-rule");

class ImageAltRule extends BaseSeoRule {
  constructor() {
    super(
      "IMAGE_ALT",
      "img",
    );
    this.invalidImagesCount = 0;
  }

  getErrorMessage() {
    return `${this.invalidImagesCount} images are missing alt attributes.`;
  }

  isValid($) {
    const $elements = $(this.selector);
    
    $elements.each((index, element) => {
      const $element = $(element);
      const alt = $element.attr('alt');
      if (!alt) {
        this.invalidImagesCount++;
      }
    });

    return this.invalidImagesCount === 0;
  }
}

module.exports = ImageAltRule;