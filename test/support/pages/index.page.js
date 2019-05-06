import Page from './basePage';

class InternetIndexPage extends Page {
  get header() { return $('h1'); }
  get links() { return $$('li a'); }
}

export default new InternetIndexPage();
