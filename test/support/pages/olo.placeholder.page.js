import Page from './basePage'

class OloPlaceholder extends Page {
  get signInBtn() { return $('button[data-test-header-button="login"]'); }
  //TODO: create account page
  get createAccountTab() { return $('label[data-test-segmented-control-label="Create Account"]'); }
  get firstName() { return $('input[data-test-selector="firstName"]'); }
  get lastName() { return $('input[data-test-selector="lastName"]'); }
  get emailName() { return $('input[data-test-selector="email"]'); }
  get phoneNumber() { return $('input[data-test-selector="contactNumber"]'); }
  get password() { return $('input[data-test-selector="password"]'); }
  get TOSChkBox() { return $('#acceptedTerms'); }
  get spam() { return $('#optIn'); }
  get createAccountBtn() { return $('#ember140'); }
  //TODO signed in home page
  get signedInBtn() { return $('button[data-test-header-button="login"]'); }
  
}

export default new OloPlaceholder();
