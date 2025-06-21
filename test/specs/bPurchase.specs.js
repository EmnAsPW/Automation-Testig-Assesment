const loginActions = require("../login/loginActions");
const purchaseActions = require("../purchase/purchaseActions");

describe("Q2 - Standard User Purchase Flow", () => {
  it("should complete a 3-item purchase and show success message", async () => {
    // await browser.pause(3000);
    await browser.url("https://www.saucedemo.com/");

    await loginActions.login("standard_user", "secret_sauce");
    // await browser.pause(2000);

    await purchaseActions.resetAppStateAndLogout();
    await browser.pause(1000);
    await browser.url("https://www.saucedemo.com/");

    await loginActions.login("standard_user", "secret_sauce");
    await browser.pause(2000);

    await purchaseActions.addItemsToCart(3);
    await browser.pause(2000);
    await purchaseActions.goToCart();
    await browser.pause(1000);
    await purchaseActions.verifyCartHasItems(3);
    await browser.pause(2000);

    await purchaseActions.completeCheckout();
    await browser.pause(5000);
    await purchaseActions.verifyTotalAndFinish();

    await purchaseActions.resetAppStateAndLogout();
  });
});
