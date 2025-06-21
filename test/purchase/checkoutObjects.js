class CheckoutObjects {
  get checkoutButton() {
    return $("#checkout");
  }

  get firstName() {
    return $("#first-name");
  }

  get lastName() {
    return $("#last-name");
  }

  get postalCode() {
    return $("#postal-code");
  }

  get continueButton() {
    return $("#continue");
  }

  get finishButton() {
    return $("#finish");
  }

  get successMessage() {
    return $(".complete-header");
  }

  get summaryTotal() {
    return $(".summary_total_label");
  }

  get cartItems() {
    return $$(".cart_item");
  }
}
module.exports = new CheckoutObjects();
