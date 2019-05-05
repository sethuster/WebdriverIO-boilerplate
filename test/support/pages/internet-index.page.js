import Page from './basePage';

class InternetIndexPage extends Page {
  get header() { return $('h1'); }
  get links() { return $$('li a'); }
  get footer() { return $('#page-footer div div'); }
  get footerLink() { return this.footer.$('a'); }
}

export default new InternetIndexPage();
