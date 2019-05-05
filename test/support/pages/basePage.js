export default class Page {
  constructor() {
    this.title = 'BasePage';
  }
  // Elements that all the app uses can be put here

  open(path){
    browser.url(path);
  }
}
