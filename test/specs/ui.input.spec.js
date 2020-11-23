import InputPage from '../support/pages/input.page'
import assert from 'assert'

describe('Input Spec', () => {
  before(() => {
    InputPage.open('/inputs');
  });

  it('Verify the input is a number', () => {
    InputPage.number.setValue("string");
    assert.equal(InputPage.number.getText(), "")
  });

})
