// const { browser } = require("@wdio/globals");

// /**
//  * main page object containing all methods, selectors and functionality
//  * that is shared across all page objects
//  */
// module.exports = class Page {
//   /**
//    * Opens a sub page of the page
//    * @param path path of the sub page (e.g. /path/to/page.html)
//    */
//   open(path) {
//     return browser.url(`https://the-internet.herokuapp.com/${path}`);
//   }
// };
/////////////////////////////////////////////////////////////////////////////
// const { expect, browser } = require("@wdio/globals");
// const LoginPage = require("../pageobjects/login.page");
// const SecurePage = require("../pageobjects/secure.page");

// describe("My Login application", () => {
//   it("should login with valid credentials", async () => {
//     await LoginPage.open();

//     await LoginPage.login("tomsmith", "SuperSecretPassword!");
//     await browser.pause(2000);
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveText(
//       expect.stringContaining("You logged into a secure area!")
//       // await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
//     );
//     await browser.pause(2000);
//   });

//   it("Verify Site Title", async () => {
//     const siteTitle = await browser.getTitle();
//     console.log(`Site title is: ${siteTitle}`);
//   });
// });

//////////////////////////////////////////////////////////////////////
// describe("Locked Out User Login", () => {
//   it("should show error for locked_out_user", async () => {
//     await browser.url("https://www.saucedemo.com");
//     await $("#user-name").setValue("locked_out_user");
//     await $("#password").setValue("secret_sauce");
//     await $("#login-button").click();

//     const error = await $(".error-message-container");
//     const errorText = await error.getText();
//     await browser.pause(2000);
//     expect(await error.isDisplayed()).toBe(true);
//     expect(errorText).toContain("locked out");
//   });
// });
// const loginActions = require("../login/loginActions");

// describe("Locked Out User Login", () => {
//   it("should show error for locked_out_user", async () => {
//     await loginActions.inputUsername("locked_out_user");
//     await loginActions.inputPassword("secret_sauce");
//     await loginActions.clickLoginButton();

//     const error = await $(".error-message-container");
//     const errorText = await error.getText();
//     await browser.pause(2000);
//     expect(await error.isDisplayed()).toBe(true);
//     expect(errorText).toContain("locked out");
//   });
// });
