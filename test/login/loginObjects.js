class LoginObjects {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("//input[@id='user-name']");
  }

  get inputPassword() {
    return $("//input[@id='password']");
  }

  get btnSubmit() {
    return $("//input[@id='login-button']");
  }

  get errorMessage() {
    return $(".error-message-container");
  }
}

module.exports = new LoginObjects();
