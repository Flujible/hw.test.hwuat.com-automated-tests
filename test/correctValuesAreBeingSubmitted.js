this.correctValuesAreBeingSubmitted = (browser) => {
  //Navigate to the page and wait until it has loaded
  browser.url('http://hw.test.hwuat.com/pages/homepage.html');
  browser.waitForElementVisible('body');

  //Fill the form will all valid inputs including radio button selection
  browser.setValue("form#contactForm div div div input.input", "George"); //First name
  browser.setValue("form#contactForm div div:nth-child(2) div input.input", "Bryant"); //Last name
  browser.setValue("form#contactForm div:nth-child(3) div div input.input", "QA Analyst"); //Job title
  browser.setValue("form#contactForm div:nth-child(3) div:nth-child(2) div input.input", "07432559576"); //Phone number
  browser.setValue("form#contactForm div:nth-child(4) div div input.input", "testEmail@testDomain.com"); //Email
  browser.setValue("form#contactForm div:nth-child(4) div:nth-child(2) div input.input", "testEmail@testDomain.com"); //Confirm email
  browser.click("input#Radio1.input");

  //Submit the form
  browser.click("button.btn");

  //Assert that the URL of the page redirected to contains all the values submitted in the test
  //Radio inputs have no 'value' attribute, so assuming the value should read 'Yes' to communicate which option was chosen
  browser.url((result) => {
    browser.assert.equal(result.value, "http://hw.test.hwuat.com/?firstname=George&lastname=Bryant&job=QA+Analyst&phone=07432559576&email1=testEmail%40testDomain.com&email2=testEmail%40testDomain.com&radio-options=Yes");
  });

  browser.end();
};

//Uncomment this to disable this test
module.exports = {
  disabled: true
};
