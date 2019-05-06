import InternetIndexPage from '../support/pages/index.page'
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

  it('Footer Contains Link to Elemental Selenium', () => {
    assert.equal(InternetIndexPage.footerLink.getText(), 'Elemental Selenium');
    assert.equal(InternetIndexPage.footerLink.getAttribute('href'), 'http://elementalselenium.com/');
  })

  describe('Links provided on the index page are expected', () => {
    it('A/B Testing exists', () => {
      let expected = {text: 'A/B Testing', selector: "[href='/abtest']"}
      assert.equal($(expected.selector).isDisplayed(), true);
      assert.equal($(expected.selector).getText(), expected.text);
    });
  })
  
})
