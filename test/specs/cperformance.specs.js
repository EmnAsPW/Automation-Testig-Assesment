// const loginActions = require("../login/loginActions");
// const purchaseActions = require("../purchase/purchaseActions");

// describe("Q3 - Performance Glitch User Checkout Flow", () => {
//   it("should filter, add, checkout and verify total for performance_glitch_user", async () => {
//     await loginActions.login("performance_glitch_user", "secret_sauce");

//     await purchaseActions.resetAppStateAndLogout(); // first reset
//     await loginActions.login("performance_glitch_user", "secret_sauce");

//     await purchaseActions.sortProducts("za");
//     await purchaseActions.addFirstSortedProductToCart();
//     await purchaseActions.goToCart();

//     await purchaseActions.verifyCartHasItems(1);
//     await purchaseActions.completeCheckout();

//     const productNames = await purchaseActions.getProductNamesInCart();
//     const totalPrice = await purchaseActions.getTotalPriceText();

//     console.log("Product in cart:", productNames);
//     console.log("Total price:", totalPrice);

//     expect(productNames.length).toBe(1);
//     expect(totalPrice).toContain("Total");

//     await purchaseActions.verifyTotalAndFinish();
//     await purchaseActions.resetAppStateAndLogout();
//   });
// });
