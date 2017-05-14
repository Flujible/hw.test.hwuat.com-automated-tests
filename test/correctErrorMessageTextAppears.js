this.correctErrorMessageTextAppears = (browser) => {
  //Navigate to the page and wait until it has loaded
  browser.url('http://hw.test.hwuat.com/pages/homepage.html');
  browser.waitForElementVisible('body');

  //Submit the form without inputting any values
  browser.click("button.btn");

  browser.verify.containsText("form#contactForm div div div p.errorMessage", "Please enter your first name");
  browser.verify.containsText("form#contactForm div div:nth-child(2) div p.errorMessage", "Please enter your last name");
  browser.verify.containsText("form#contactForm div:nth-child(2) div div p.errorMessage", "Please enter your job title");
  browser.verify.containsText("form#contactForm div:nth-child(2) div:nth-child(2) div p.errorMessage", "Please enter your phone number");
  browser.verify.containsText("form#contactForm div:nth-child(3) div div p.errorMessage", "Please enter your email");
  browser.verify.containsText("form#contactForm div:nth-child(3) div:nth-child(2) div p.errorMessage", "Please enter your email");

  browser.end();
};
