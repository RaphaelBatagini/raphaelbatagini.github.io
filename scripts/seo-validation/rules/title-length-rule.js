const BaseSeoRule = require("./base-seo-rule");

class TitleLengthRule extends BaseSeoRule {
  constructor() {
    super(
      "TITLE_LENGTH",
      "head > title",
    );
  }

  getErrorMessage() {
    return "Title length should be between 10 and 70 characters.";
  }

  isValid($) {
    const $element = $(this.selector);
    const title = $element.text().trim();
    const length = title.length;
    return length > 10 && length < 70;
  }
}

module.exports = TitleLengthRule;