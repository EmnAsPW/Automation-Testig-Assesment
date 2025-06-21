// class InventoryObjects {
//   get menuButton() {
//     return $("//button[@id='react-burger-menu-btn']");
//   }

//   get resetAppState() {
//     return $("//a[@id='reset_sidebar_link']");
//   }

//   get logoutButton() {
//     return $("//a[@id='logout_sidebar_link']");
//   }

//   get addToCartButtons() {
//     return $("//button[@id='add-to-cart-sauce-labs-backpack']");
//   }

//   get cartIcon() {
//     return $("//a[@class='shopping_cart_link']");
//   }
// }
// module.exports = new InventoryObjects();
class InventoryObjects {
  get menuButton() {
    return $("#react-burger-menu-btn");
  }

  get closeMenuButton() {
    return $("#react-burger-cross-btn");
  }

  get resetAppState() {
    return $("#reset_sidebar_link");
  }

  get logoutButton() {
    return $("#logout_sidebar_link");
  }

  get cartIcon() {
    return $(".shopping_cart_link");
  }

  get addToCartButtons() {
    return $$("button[id^='add-to-cart']");
  }
  ////////////////////////////////////////
  get sortDropdown() {
    return $(".product_sort_container");
  }

  get inventoryItems() {
    return $$(".inventory_item");
  }

  get inventoryItemNames() {
    return $$(".inventory_item_name");
  }
}

module.exports = new InventoryObjects();
