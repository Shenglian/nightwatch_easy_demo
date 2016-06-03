module.exports = {
  src_folders: ['./tests'],
  output_folder: './results',
  live_output: true,

  "selenium" : {
    "start_process" : false,
    "server_path" : "",
    "log_path" : "",
    "host" : "127.0.0.1",
    "port" : 4444,
    "cli_args" : {
      "webdriver.chrome.driver" : "",
      "webdriver.ie.driver" : ""
    }
  },
  "test_settings": {
    default: {
      launch_url: 'http://localhost',
      selenium_host: '127.0.0.1',
      selenium_port: 4444,
      silent: true,
      chrome_driver: "lib/chromedriver",
      disable_colors: false,
      screenshots: {
        enabled: true,
        path: './results/screenshots'
      },
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },
    "chrome": {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true
      }
    },
    "chromemobile": {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        chromeOptions: {
          "args": [
            "--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_2 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A4449d Safari/9537.53",
            "--window-size=320,640"
          ]
        }
      }
    },
    "safai": {
      desiredCapabilities: {
        browserName: 'safai',
        javascriptEnabled: true
      }
    }
  }
};


