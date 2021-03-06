require('dotenv').config();
const BINPATH = './node_modules/nightwatch/bin/';

// we use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {
  "src_folders": ["test"],
  "output_folder": "./reports", // reports (test outcome) output by nightwatch
  "selenium": { // downloaded by selenium-download module (see readme)
    "start_process": false, // tells nightwatch to start/stop the selenium process
    "host": "ondemand.saucelabs.com",
    "port": 80, // standard selenium port
  },
  "test_settings": {
    "default": {
      "launch_url": "http://localhost",
      "selenium_port": 80,
      "selenium_host": "ondemand.saucelabs.com",
      "silent": true,
      "username": process.env.SAUCE_USERNAME,
      "access_key": process.env.SAUCE_ACCESS_KEY,
      "screenshots": {
        "enabled": false,
        "path": "",
      },
      "globals": {
        "waitForConditionTimeout": 10000,
      },
    },
    "chrome61_Win10": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "platform": "Windows 10",
        "version": "61.0",
      },
    },
    "firefox56_macOS10.12": {
      "browserName": "firefox",
      "version": "56.0",
      "platform": "macOS 10.12"
    },
    "ie11_Win7": {
      "desiredCapabilities": {
        "browserName": "internet explorer",
        "platform": "Windows 7",
        "version": "11.0",
      },
    },
    "iphoneX_iOS11": {
      "desiredCapabilities": {
        "browserName": "Safari",
        "appiumVersion": "1.7.1",
        "deviceName": "iPhone X Simulator",
        "deviceOrientation": "portrait",
        "platformName": "iOS",
        "platformVersion": "11.0",
      },
    },
    "Android7": {
      "automationName": "Appium",
      "appiumVersion": "1.7.1",
      "browserName": "Chrome",
      "deviceName": "Android GoogleAPI Emulator",
      "platformVersion": "7.1",
      "platformName": "Android"
    }
  }
};
/**
 * selenium-download does exactly what it's name suggests;
 * downloads (or updates) the version of Selenium (& chromedriver)
 * on your localhost where it will be used by Nightwatch.
 /the following code checks for the existence of `selenium.jar` before trying to run our tests.
 */

require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) { // got it?
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(BINPATH, function(error) {
      if (error) throw new Error(error); // no point continuing so exit!
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});
