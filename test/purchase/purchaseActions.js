const Inventory = require("../purchase/inventoryObjects");
const Checkout = require("../purchase/checkoutObjects");

class PurchaseActions {
  async resetAppStateAndLogout() {
    await Inventory.menuButton.click();

    await Inventory.resetAppState.click();

    // Properly close the menu first
    await Inventory.closeMenuButton.waitForDisplayed({ timeout: 2000 });
    await Inventory.closeMenuButton.click();

    // Reopen to access logout
    await Inventory.menuButton.waitForClickable({ timeout: 2000 });
    await Inventory.menuButton.click();

    await Inventory.logoutButton.waitForClickable({ timeout: 2000 });
    await Inventory.logoutButton.click();
  }

  async addItemsToCart(count = 3) {
    const buttons = await Inventory.addToCartButtons;
    for (let i = 0; i < count; i++) {
      await buttons[i].click();
    }
  }

  async goToCart() {
    await Inventory.cartIcon.click();
  }

  async completeCheckout() {
    await Checkout.checkoutButton.click();
    await Checkout.firstName.setValue("Test");
    await Checkout.lastName.setValue("User");
    await Checkout.postalCode.setValue("12345");
    await Checkout.continueButton.click();
  }

  async verifyTotalAndFinish() {
    const total = await Checkout.summaryTotal.getText();
    console.log("Total price: ", total); // Optional for logging
    expect(total).toContain("Total");

    await Checkout.finishButton.click();
    const message = await Checkout.successMessage.getText();
    expect(message).toContain("Thank you");
  }

  // async verifyCartHasItems(count = 3) {
  //   const items = await Checkout.cartItems;
  //   expect(items.length).toBe(count);
  // }

  async verifyCartHasItems(expectedCount) {
    const items = await Checkout.cartItems;

    if (!Array.isArray(items)) {
      throw new Error(`Expected array of cart items but got ${typeof items}`);
    }

    expect(items.length).toBe(expectedCount);
  }

  //////////////////////////////////

  async sortProducts(order = "za") {
    const dropdown = await Inventory.sortDropdown;
    await dropdown.selectByVisibleText("Name (Z to A)");
  }

  async addFirstSortedProductToCart() {
    const firstAddBtn = await Inventory.addToCartButtons[0];
    await firstAddBtn.click();
  }

  async getProductNamesInCart() {
    const items = await Checkout.cartItems;
    // Validate it's an array
    if (!Array.isArray(items)) {
      throw new Error(
        `Expected an array of cart items, but got: ${typeof items}, value: ${items}`
      );
    }

    return Promise.all(
      items.map(async (item) => {
        const nameElem = await item.$(".inventory_item_name");
        return await nameElem.getText();
      })
    );
  }

  async getTotalPriceText() {
    return await Checkout.summaryTotal.getText();
  }
}

module.exports = new PurchaseActions();
