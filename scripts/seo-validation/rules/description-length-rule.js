const BaseSeoRule = require("./base-seo-rule");

class DescriptionLengthRule extends BaseSeoRule {
  constructor() {
    super(
      "DESCRIPTION_LENGTH",
      "head > meta[name='description']",
    );
    this.currentDescriptionLength = 0;
  }

  getErrorMessage() {
    return `Description length should be between 50 and 160 characters. Current length: ${this.currentDescriptionLength}`;
  }

  isValid($) {
    const $element = $(this.selector);
    const description = $element.attr('content') || '';
    this.currentDescriptionLength = description.length;
    return this.currentDescriptionLength > 50 && this.currentDescriptionLength < 160;
  }
}

module.exports = DescriptionLengthRule;