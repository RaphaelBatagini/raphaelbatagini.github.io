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
    const seoValidationResults = [];

    for (const filePath of htmlFiles) {
      const errors = validateSEO(filePath);

      if (errors.length > 0) {
        seoValidationResults.push({
          filePath,
          errors,
        });
      }
    }

    if (seoValidationResults.length > 0) {
      console.log(chalk.red('SEO validation failed. See the table below for details:'));
      for (let i = 0; i < seoValidationResults.length; i++) {
        console.log(chalk.red(`\n${i + 1}. ${seoValidationResults[i].filePath}`));
        console.table(seoValidationResults[i].errors);
      }
    } else {
      console.log(chalk.green('SEO validation passed for all files.'));
    }
  } catch (error) {
    console.error('Error validating SEO:', error);
  }
}

validateAllHTMLs(outputFolder);
