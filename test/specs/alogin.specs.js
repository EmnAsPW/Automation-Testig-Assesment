const loginActions = require("../login/loginActions");

describe("Locked Out User Login", () => {
  it("should show error for locked_out_user", async () => {
    await loginActions.login("locked_out_user", "secret_sauce");

    const isErrorVisible = await loginActions.isErrorDisplayed();
    const errorText = await loginActions.getErrorMessageText();

    expect(isErrorVisible).toBe(true);
    expect(errorText).toContain("locked out");

    // Visual confirmation (wait for error display instead of hard pause)
    await browser.waitUntil(async () => await loginActions.isErrorDisplayed(), {
      timeout: 5000,
      timeoutMsg: "Expected locked out error message",
    });

    // Optionally go back to clean login page
    await browser.url("https://www.saucedemo.com");
  });
});
