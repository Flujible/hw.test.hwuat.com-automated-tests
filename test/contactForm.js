describe("Contact Doc Brown form", () => {
  /* Before running the test suite, open up the page and fill in the form with
  test info */
  before((browser, done) => {
    browser
      .url("http://hw.test.hwuat.com/pages/homepage.html")
      .waitForElementVisible('body', () => {
        done();
      });
  });

  after((browser, done) => {
    browser.end(() => {
      done();
    });
  });

  it("'First name' field shows error", (browser) => {
    browser
      .pause(3000)
      .clearValue("#contactForm > div:nth-child(2) > div:nth-child(1) > div > input[name='firstname']")
      .click("#contactForm > div:nth-child(6) > button")
      .pause(1000)
      .assert.visible("#contactForm > div:nth-child(2) > div:nth-child(1) > div > p")
      .assert.containsText("#contactForm > div:nth-child(2) > div:nth-child(1) > div > p", "Please enter your first name");
  });

  it("'Last name' field shows error", (browser) => {
    browser
      .clearValue("#contactForm > div:nth-child(2) > div:nth-child(2) > div > input[name='lastname']")
      .click("#contactForm > div:nth-child(6) > button")
      .assert.visible("#contactForm > div:nth-child(2) > div:nth-child(2) > div > p")
      .assert.containsText("#contactForm > div:nth-child(2) > div:nth-child(2) > div > p", "Please enter your last name");
  });

  it("'Job title' field shows error", (browser) => {
    browser
      .clearValue("#contactForm > div:nth-child(3) > div:nth-child(1) > div > input[name='job']")
      .click("#contactForm > div:nth-child(6) > button")
      .assert.visible("#contactForm > div:nth-child(3) > div:nth-child(1) > div > p")
      .assert.containsText("#contactForm > div:nth-child(3) > div:nth-child(1) > div > p", "Please enter your job title");
  });

  it("'Phone' field shows error", (browser) => {
    browser
      .clearValue("#contactForm > div:nth-child(3) > div:nth-child(2) > div > input")
      .click("#contactForm > div:nth-child(6) > button")
      .assert.visible("#contactForm > div:nth-child(3) > div:nth-child(2) > div > p")
      .assert.containsText("#contactForm > div:nth-child(3) > div:nth-child(2) > div > p", "Please enter your phone number");
  });

  it("'Email' field shows error", (browser) => {
    browser
      .clearValue("#contactForm > div:nth-child(4) > div:nth-child(1) > div > input")
      .click("#contactForm > div:nth-child(6) > button")
      .assert.visible("#contactForm > div:nth-child(4) > div:nth-child(1) > div > p")
      .assert.containsText("#contactForm > div:nth-child(4) > div:nth-child(1) > div > p", "Please enter your email");
  });

  it("'Confirm Email' field shows error", (browser) => {
    browser
      .clearValue("#contactForm > div:nth-child(4) > div:nth-child(2) > div > input")
      .click("#contactForm > div:nth-child(6) > button")
      .assert.visible("#contactForm > div:nth-child(4) > div:nth-child(2) > div > p")
      .assert.containsText("#contactForm > div:nth-child(4) > div:nth-child(2) > div > p", "Please enter your email");
  });

  it("shows an error message when the two email fields do not match", (browser) => {
    browser
      .setValue("#contactForm > div:nth-child(4) > div:nth-child(1) > div > input", "Email field")
      .setValue("#contactForm > div:nth-child(4) > div:nth-child(2) > div > input", "Confirm email field")
      .click("#contactForm > div:nth-child(6) > button")
      .assert.visible("#contactForm > div:nth-child(4) > div:nth-child(2) > div > p")
      .assert.containsText("#contactForm > div:nth-child(4) > div:nth-child(2) > div > p", "Emails do not match");
  });
});

//Uncomment this to disable this test
// module.exports = {
//   disabled: true
// };
