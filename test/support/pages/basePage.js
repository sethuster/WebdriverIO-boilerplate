export default class Page {
  constructor() {
    this.title = 'BasePage';
  }
  // Elements that all the app uses can be put here
  get footer() { return $('#page-footer'); }
  get footerLink() { return this.footer.$('=Elemental Selenium'); }

  open(path){
    browser.url(path);
  }
}
