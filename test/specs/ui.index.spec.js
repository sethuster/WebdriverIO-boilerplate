import InternetIndexPage from '../support/pages/internet-index.page'
import assert from 'assert'

describe('The Internet index Page', () => {
  before(() => {
    InternetIndexPage.open(browser.options.baseUrl);
  })

  it('Page title is as expected', () => {
    assert.equal(browser.getTitle(), 'The Internet');
  })

  it('Header Text is Expected', () => {
    assert.equal(InternetIndexPage.header.getText(), 'Welcome to the-internet');
  })

  it('Page has the expected amount of links available', () => {
    assert.equal(InternetIndexPage.links.length, 41)
  });
})
