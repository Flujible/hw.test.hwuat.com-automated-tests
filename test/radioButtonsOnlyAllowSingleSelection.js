//Needed to use the expect style as could not find a way to check if radio button was selcting with the assertion libray

this.radioButtonsOnlyAllowSingleSelection = (browser) => {
  //Navigate to the page and wait until it has loaded
  browser.url('http://hw.test.hwuat.com/pages/homepage.html');
  browser.waitForElementVisible('body');

  //Click the first option and expect the others to not be selected
  browser.click("input#Radio1.input");
  browser.expect.element("input#Radio2.input").to.not.be.selected;
  browser.expect.element("input#Radio3.input").to.not.be.selected;

  //Click the second option and expect the others to not be selected
  browser.click("input#Radio2.input");
  browser.expect.element("input#Radio1.input").to.not.be.selected;
  browser.expect.element("input#Radio3.input").to.not.be.selected;

  //Click the third option and expect the others to not be selected
  browser.click("input#Radio3.input");
  browser.expect.element("input#Radio1.input").to.not.be.selected;
  browser.expect.element("input#Radio2.input").to.not.be.selected;

  browser.end();
};

// module.exports = {
//   disabled: true
// };
