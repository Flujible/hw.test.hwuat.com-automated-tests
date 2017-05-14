this.basicTest = (browser) => {
    browser.url('http://hw.test.hwuat.com/pages/homepage.html');
    browser.waitForElementVisible('body');


    browser.assert.title('Test Page Title');
    browser.end();
};
