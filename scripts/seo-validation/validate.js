const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const { TitleLengthRule, DescriptionLengthRule, H1Rule, ImageAltRule } = require('./rules');

const outputFolder = 'out';
const logFolder = 'seo-logs';
const logFileName = 'seo-validation.log';

const customRules = [
  new TitleLengthRule(),
  new DescriptionLengthRule(),
  new H1Rule(),
  new ImageAltRule(),
];

function validateSEO(htmlFilePath) {
  const errors = [];

  for (const rule of customRules) {
    const validation = rule.validate(htmlFilePath);

    if (validation.valid === false) {
      errors.push({ rule: rule.name, message: validation.message });
    }
  }

  return errors;
}

function findAllHTMLFiles(dir) {
  const htmlFiles = [];

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);

    if (fs.lstatSync(filePath).isDirectory()) {
      const nestedHtmlFiles = findAllHTMLFiles(filePath);
      htmlFiles.push(...nestedHtmlFiles);
    } else if (filePath.endsWith('.html')) {
      htmlFiles.push(filePath);
    }
  }

  return htmlFiles;
}

function validateAllHTMLs(dir) {
  try {
    const htmlFiles = findAllHTMLFiles(dir);

    if (!fs.existsSync(logFolder)) {
      fs.mkdirSync(logFolder);
    }

    const logFilePath = path.join(logFolder, logFileName);
    fs.writeFileSync(logFilePath, '');

    let hasErrors = false;

    for (const filePath of htmlFiles) {
      const errors = validateSEO(filePath);

      if (errors.length > 0) {
        hasErrors = true;
        fs.appendFileSync(logFilePath, `SEO issues found in ${filePath}:\n`);
        errors.forEach((error) => {
          fs.appendFileSync(logFilePath, `  - ${error.rule}: ${error.message}\n`);
        });
        fs.appendFileSync(logFilePath, '\n');
      }
    }

    if (hasErrors) {
      console.log(chalk.red('SEO validation failed. Check the log file for details.'));
      process.exit(1);
    } else {
      console.log(chalk.green('SEO validation passed for all files.'));
    }
  } catch (error) {
    console.error('Error validating SEO:', error);
  }
}

validateAllHTMLs(outputFolder);
