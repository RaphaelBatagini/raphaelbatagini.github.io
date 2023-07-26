const BaseSeoRule = require("./base-seo-rule");

class TitleLengthRule extends BaseSeoRule {
  constructor() {
    super(
      "TITLE_LENGTH",
      "head > title",
    );
    this.currentTitleLength = 0;
  }

  getErrorMessage() {
    return `Title length should be between 10 and 70 characters. Current length: ${this.currentTitleLength}`;
  }

  isValid($) {
    const $element = $(this.selector);
    const title = $element.text().trim();
    this.currentTitleLength = title.length;
    return this.currentTitleLength > 10 && this.currentTitleLength < 70;
  }
}

module.exports = TitleLengthRule;