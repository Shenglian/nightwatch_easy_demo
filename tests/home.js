module.exports = {
  before : function(browser) {
      console.log("Let's Start...");
      
  },
  after : function(browser) {
      console.log("Closing down...");
  },
  'CK Mobile Index Cookie Name': function(browser){
    browser
    .url('http://ck101.com/forum.php')
    .waitForElementVisible('body', 1000)
    .pause(1000)
    .click('div[class=topLeft]')
    .pause(1000)
    .url('http://ck101.com/forum.php')
    .pause(1000)
    .assert.containsText('h2', '今日焦點')
    .pause(1000)
    .getCookie('Lre7_9bf0_m_popupad_date', function callback(result) {
        this.assert.equal(result.name, 'Lre7_9bf0_m_popupad_date');
    })
    .getTitle(function(title) {
      this.assert.equal(title, '卡提諾論壇-CK101.COM - 手機版 - Powered by Discuz!');
    })
    .assert.urlEquals('http://ck101.com/forum.php')
    .end();
  }
};

// 
// start: selenium-server -p 4444
// stop: http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer
// nightwatch -c ./Nightwatch.js --env default
// 

// # with chrome driver
// $ java -jar selenium-server-standalone-2.44.0.jar -Dwebdriver.chrome.driver=./chromedriver
// # with ie driver
// $ java -jar selenium-server-standalone-2.44.0.jar -Dwebdriver.ie.driver=C:\IEDriverServer.exe
