const ChromiumRevision = require('puppeteer/package.json').puppeteer
  .chromium_revision;
const Downloader = require('puppeteer/utils/ChromiumDownloader');
const revisionInfo = Downloader.revisionInfo(
  Downloader.currentPlatform(),
  ChromiumRevision
);

process.env.CHROME_BIN = revisionInfo.executablePath;

module.exports = function(config) {
  config.set({
    frameworks: ['chai', 'mocha', 'sinon-chai', 'sinon'],
    files: [
      { pattern: 'lib/chai/chai.js', included: false, served: true },
      { pattern: 'lib/jquery.js', included: false, served: true },
      { pattern: 'lib/underscore.js', included: false, served: true },
      { pattern: 'lib/sinon/sinon.js', included: false, served: true },
      { pattern: 'karmaTest.html', included: true, served: true },
      {
        pattern: 'src/getElementsByClassName.js',
        included: false,
        served: true
      },
      { pattern: 'src/parseJSON.js', included: false, served: true },
      { pattern: 'src/stringifyJSON.js', included: false, served: true },
      { pattern: 'test/**/*.js', included: false, served: true }
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    concurrency: Infinity
  });
};
