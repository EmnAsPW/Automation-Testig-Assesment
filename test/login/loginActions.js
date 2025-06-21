const LoginObject = require("./loginObjects");

class LoginActions {
  async login(username, password) {
    await LoginObject.inputUsername.setValue(username);
    await LoginObject.inputPassword.setValue(password);
    await LoginObject.btnSubmit.click();
  }

  async getErrorMessageText() {
    return await LoginObject.errorMessage.getText();
  }

  async isErrorDisplayed() {
    return await LoginObject.errorMessage.isDisplayed();
  }
}
module.exports = new LoginActions();
