const loginActions = require("../login/loginActions");
const purchaseActions = require("../purchase/purchaseActions");

describe("Q3 - Performance Glitch User Checkout Flow", () => {
  it("should filter, add, checkout and verify total for performance_glitch_user", async () => {
    await loginActions.login("performance_glitch_user", "secret_sauce");

    await purchaseActions.resetAppStateAndLogout(); // first reset
    await loginActions.login("performance_glitch_user", "secret_sauce");

    await purchaseActions.sortProducts("za");
    await browser.pause(3000);
    await purchaseActions.addFirstSortedProductToCart();
    await browser.pause(2000);
    await purchaseActions.goToCart();
    await browser.pause(2000);
    await purchaseActions.verifyCartHasItems(1);
    await purchaseActions.completeCheckout();
    await browser.pause(2000);

    const totalPrice = await purchaseActions.getTotalPriceText();

    console.log("Total price:", totalPrice);

    expect(totalPrice).toContain("Total");

    await purchaseActions.verifyTotalAndFinish();
    await purchaseActions.resetAppStateAndLogout();
  });
});
