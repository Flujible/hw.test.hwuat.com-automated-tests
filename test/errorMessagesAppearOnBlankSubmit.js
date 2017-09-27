this.errorMessagesAppearOnBlankSubmit = (browser) => {
  //Navigate to the page and wait until it has loaded
  browser.url('http://hw.test.hwuat.com/pages/homepage.html');
  browser.waitForElementVisible('body');

  //Submit the form without inputting any values
  browser.click("button.btn");

  //Assert that 6 elments with the .errorMessage class are present
  let numberOfFields = 6;
  browser.elements("css selector", '.errorMessage', (elements) => {
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
