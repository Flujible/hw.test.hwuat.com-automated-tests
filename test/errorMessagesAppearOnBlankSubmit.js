this.errorMessagesAppearOnBlankSubmit = (browser) => {
  let numberOfFields = 6;
  //Navigate to the page and wait until it has loaded
  browser
    .url('http://hw.test.hwuat.com/pages/homepage.html')
    .waitForElementVisible('body')

  //Submit the form without inputting any values
    .click("button.btn")

  //Assert that 6 elments with the .errorMessage class are present
    .elements("css selector", '.errorMessage', (elements) => {
    // set the variable to be that collection's length
    elementCount = elements.value.length;
    browser.assert.equal(elementCount, numberOfFields);
  });
  browser.end();
};

//Uncomment this to disable this test
module.exports = {
  disabled: true
};
