import ForgotPassword from '../support/pages/forgotPassword.page'
import assert from 'assert'

describe('Forgot Password Page', () => {
  before(() => {
    ForgotPassword.open('/forgot_password');
  })

  it('Forgot password email field', () => {
    ForgotPassword.email.setValue("david@ortiz.com");
  })

  
  
})
