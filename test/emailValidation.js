let setup = (browser) => {
  //Navigate to the page and wait until it has loaded
  browser.url('http://hw.test.hwuat.com/pages/homepage.html');
  browser.waitForElementVisible('body');

  //Fill in the rest of the form with valid inputs
  browser.setValue("form#contactForm div div div input.input", "George"); //First name
  browser.setValue("form#contactForm div div:nth-child(2) div input.input", "Bryant"); //Last name
  browser.setValue("form#contactForm div:nth-child(3) div div input.input", "QA Analyst"); //Job title
  browser.setValue("form#contactForm div:nth-child(3) div:nth-child(2) div input.input", "07432659576"); //Phone number
  browser.setValue("form#contactForm div:nth-child(4) div:nth-child(2) div input.input", "testEmail@testDomain.com"); //Confirm email
};

this.emailValidation = (browser) => {
  let invalidEmails = [
    'Hello',
    784037,
    -12,
    'george.s.bryantgmail.com',
    'george.s.bryant@gmail',
    '@.',
    '!£'
  ];

  //Navigate to the page and prefill the rest of the form
  setup(browser);

  //For each invalid email address, insert it into the field, submit, and check for error messages appearance
  invalidEmails.forEach((value) => {
    browser.setValue("form#contactForm div:nth-child(4) div div input.input", value);
    browser.click("button.btn");
    browser.verify.containsText("form#contactForm div:nth-child(4) div div p.errorMessage", "Please enter a valid email address");

    // On successfull submit, the page redirects, so re-setup the original page, if not redirected then clear the input field
    browser.getTitle((title) => {
      if(title === 'HW Template Sandbox') {
        setup(browser);
      } else {
        browser.clearValue("form#contactForm div:nth-child(4) div div input.input");
      }
    });
  });

  browser.end();
};

module.exports = {
  disabled: true
};