import Page from '../pages/basePage';

class AddRemoveElements extends Page {
  get addElementButton() { return $('.example button'); }
  get addedElements() { return $$('div button.added-manually'); }
}

export default new AddRemoveElements();
