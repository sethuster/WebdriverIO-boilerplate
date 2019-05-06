import ABTesting from '../support/pages/abtesting.page'
import assert from 'assert'

describe('AB Testing Page', () => {
  before(() => {
    ABTesting.open('/abtest')
  })

  it('Verifies the Header Text', () => {
    assert.equal(ABTesting.header.getText(), 'A/B Test Control');
  });

  it('Verifies the Footer is displayed', () => {
    assert.equal(ABTesting.footer.isDisplayed(), true);
  })

})
