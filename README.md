

First ==>

	npm install

Second ==>

	start: selenium-server -p 4444
	stop: http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer
	nightwatch -c ./Nightwatch.js --env default

	defalut/chromemobile/chrome