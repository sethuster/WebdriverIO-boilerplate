import Page from './basePage'

class InputPage extends Page {
  get number() { return $('input[type="number"]'); }
}

export default new InputPage();
