import AddRemoveElements from '../support/pages/addremoveelements.page';
import assert from 'assert';

describe('Add Remove Elements Page', () => {
  before(() => {
    AddRemoveElements.open('/add_remove_elements/');
  });

  it('The footer is displayed on the page', () => {
    assert.equal(AddRemoveElements.footer.isDisplayed(), true);
  });

  it('The new elements are added when button is clicked', () => {
    assert.equal(AddRemoveElements.addedElements.length, 0);
    AddRemoveElements.addElementButton.click();
    assert.equal(AddRemoveElements.addedElements.length, 1);
  });

  it('The new elements are removed when click', () => {
    assert.equal(AddRemoveElements.addedElements.length, 1);
    AddRemoveElements.addedElements[0].click();
    assert.equal(AddRemoveElements.addedElements.length, 0);
  });

  it('New Elements are added for each click of AddElements button', () => {
    assert.equal(AddRemoveElements.addedElements.length, 0);
    let amount = 3;
    for(let i = 0; i < amount; i++){
      AddRemoveElements.addElementButton.click();
    }
    assert.equal(AddRemoveElements.addedElements.length, amount);
  });

  it('Multiple new elements are removed when clicked', () => {
    let amount = 3;
    assert.equal(AddRemoveElements.addedElements.length, amount);
    for(let i = 0; i < amount; i++){
      AddRemoveElements.addedElements[0].click();
    }
    assert.equal(AddRemoveElements.addedElements.length, 0);
  })
})
