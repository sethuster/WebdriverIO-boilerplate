import Page from './basePage'

class ABTesting extends Page {
  get header() { return $('#content h3'); }
}

export default new ABTesting();
