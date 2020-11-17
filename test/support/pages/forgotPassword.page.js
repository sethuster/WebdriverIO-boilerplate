import Page from './basePage'

class ForgotPassword extends Page {
  get email() { return $("#email") }
}

export default new ForgotPassword();
