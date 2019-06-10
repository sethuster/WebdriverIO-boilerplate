import assert, { fail } from 'assert'
import OloPlaceholder from '../support/pages/olo.placeholder.page';

describe('Test the create account page', () => {
  const testAccount = {
    firstname: 'tester',
    lastname: 'mctesterson',
    email: 'tester@test.com',
    phone: '3039168683',
    password: 'testtest1'
  }

  before(() => {
    OloPlaceholder.open('https://mwv2uitest-express-testeng.oloqa.com/');
  });

  it('Sign In button exists on login page', () => {
    assert.equal(true, OloPlaceholder.signInBtn.waitForExist());
  });

  it('Create account section exists', () => {
    OloPlaceholder.signInBtn.click();
    assert.equal(true, OloPlaceholder.createAccountTab.waitForExist());
  });

  it('Verfiy create account fields exist', () => {
    OloPlaceholder.createAccountTab.click();
    assert.equal(true, OloPlaceholder.firstName.waitForExist());
    assert.equal(true, OloPlaceholder.lastName.waitForExist());
    assert.equal(true, OloPlaceholder.emailName.waitForExist());
    assert.equal(true, OloPlaceholder.phoneNumber.waitForExist());
    assert.equal(true, OloPlaceholder.password.waitForExist());
    assert.equal(true, OloPlaceholder.TOSChkBox.waitForExist());
    assert.equal(false, OloPlaceholder.spam.waitForExist());
  });

  it('Create an account', () => {
    OloPlaceholder.firstName.setValue(testAccount.firstname);
    OloPlaceholder.lastName.setValue(testAccount.lastname);
    OloPlaceholder.emailName.setValue(testAccount.email);
    OloPlaceholder.phoneNumber.setValue(testAccount.phone);
    OloPlaceholder.password.setValue(testAccount.password);
    OloPlaceholder.TOSChkBox.click()
    assert.equal(true, OloPlaceholder.createAccountBtn.isEnabled());
    OloPlaceholder.createAccountBtn.click();
    assert.equal(true, OloPlaceholder.signedInBtn.waitForExist());
  });


})
