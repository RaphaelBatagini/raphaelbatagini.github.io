const BaseSeoRule = require("./base-seo-rule");

class HeaderMetaRule extends BaseSeoRule {
  constructor() {
    super(
      "HEADER_META",
      "head > meta[name='description']",
    );
  }

  getErrorMessage() {
    return "Description length should be between 50 and 160 characters.";
  }

  isValid($) {
    const $element = $(this.selector);
    const description = $element.attr('content') || '';
    const length = description.length;
    return length > 50 && length < 160;
  }
}

module.exports = HeaderMetaRule;