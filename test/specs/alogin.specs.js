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

// // const loginActions = require("../login/loginActions");
// const purchaseActions = require("../purchase/purchaseActions");

// describe("Combined Test", () => {
//   it("Q1 - should show error for locked_out_user", async () => {
//     await loginActions.login("locked_out_user", "secret_sauce");

//     const isErrorVisible = await loginActions.isErrorDisplayed();
//     const errorText = await loginActions.getErrorMessageText();

//     expect(isErrorVisible).toBe(true);
//     expect(errorText).toContain("locked out");

//     await browser.pause(1000); // Optional for demo viewing
//   });

//   it("Q2 - should complete a 3-item purchase and show success message", async () => {
//     await loginActions.login("standard_user", "secret_sauce");

//     await purchaseActions.resetAppStateAndLogout(); // Reset before adding items
//     await loginActions.login("standard_user", "secret_sauce"); // Re-login

//     await purchaseActions.addItemsToCart(3);
//     await purchaseActions.goToCart();
//     await purchaseActions.verifyCartHasItems(3);

//     await purchaseActions.completeCheckout();
//     await purchaseActions.verifyTotalAndFinish();

//     await purchaseActions.resetAppStateAndLogout();
//   });
// });
