const sauce = require("../lib/sauce.js");
module.exports = {
  "correctErrorMessageTextAppears": (browser) => {
    //Navigate to the page and wait until it has loaded
    browser
      .url('http://hw.test.hwuat.com/pages/homepage.html')
      .waitForElementVisible('body')

      //Submit the form without inputting any values
      .click("button.btn")

      //Assert that the expected error message appears beneath each input field
      //I'm not sure why the final the nth child is skipping '2' and jumping straight from 1 to 3
      .verify.containsText("form#contactForm div div div p.errorMessage", "Please enter your first name")
      .verify.containsText("form#contactForm div div:nth-child(2) div p.errorMessage", "Please enter your last name")
      .verify.containsText("form#contactForm div:nth-child(3) div div p.errorMessage", "Please enter your job title")
      .verify.containsText("form#contactForm div:nth-child(3) div:nth-child(2) div p.errorMessage", "Please enter your phone number")
      .verify.containsText("form#contactForm div:nth-child(4) div div p.errorMessage", "Please enter your email")
      .verify.containsText("form#contactForm div:nth-child(4) div:nth-child(2) div p.errorMessage", "Please enter your email")

      .end();
  },

  tearDown: sauce
  //Uncomment this to disable this test
  // disabled: true
};
