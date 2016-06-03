case $1 in
    'server')
        selenium-server -p 4444
        ;;
    'chrome')  # use chrome
        nightwatch -c ./Nightwatch.js --env chrome
        ;;
    'mobile')  # use mobile
        nightwatch -c ./Nightwatch.js --env chromemobile
        ;;
    'default') # use default
        nightwatch -c ./Nightwatch.js --env default
        ;;
    'stop')
		open -a /Applications/Google\ Chrome.app http://localhost:4444/selenium-server/driver/?cmd=shutDownSeleniumServer
      	;;  
    *)
        echo ""
        echo "  ERROR: not supported argument => [$1]"
        echo ""
        ;;
esac

