const fs = require('fs');
const cheerio = require('cheerio');

class BaseSeoRule {
  constructor(name, selector) {
    if (this.constructor === BaseSeoRule) {
      throw new Error('Abstract classes cannot be instantiated.');
    }

    this.name = name;
    this.selector = selector;
  }

  getHtmlHandler(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return cheerio.load(fileContent);
  }

  validate(filePath) {
    const $ = this.getHtmlHandler(filePath);
    if (!this.isValid($)) {
      return { valid: false, rule: this.name, message: this.getErrorMessage() };
    }

    return { valid: true, rule: this.name };
  }

  isValid($) {
    throw new Error('Method isValid() must be implemented.');
  }

  getErrorMessage() {
    throw new Error('Method getErrorMessage() must be implemented.');
  }
}

module.exports = BaseSeoRule;