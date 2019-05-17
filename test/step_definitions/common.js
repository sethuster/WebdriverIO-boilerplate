import { Given, When, Then } from 'cucumber';
import InternetIndexPage from '../support/pages/index.page'
import assert from 'assert';
console.log('common.js is getting loaded');

Given(/^I navigate to the index$/, () => {
  console.log('I should plop out on the stdout')
  browser.url(browser.options.baseUrl);
  InternetIndexPage.open(browser.options.baseUrl);
  browser.saveScreenshot('./somescreenshot.png');
  assert.equal(browser.getUrl(), browser.options.baseUrl);
});
