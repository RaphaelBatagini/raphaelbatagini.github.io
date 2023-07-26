const BaseSeoRule = require("./base-seo-rule");

class H1Rule extends BaseSeoRule {
  constructor() {
    super(
      "H1",
      "h1",
    );
  }

  getErrorMessage() {
    return "There should be exactly one h1 tag.";
  }

  isValid($) {
    const $element = $(this.selector);
    return $element.length === 1;
  }
}

module.exports = H1Rule;