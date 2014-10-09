superuser-reader
==============

This is a reader application for the OpenStack Superuser blog based on the Blog List App tutorial at https://app-o-mat.com by Lou Franco.

Pre-requisites
==============
A working cordova toolchain with your platforms set up. See http://cordova.apache.org for installation instructions

Dependencies
============
This template includes all dependencies in `www/lib`. They are:
* jQuery from http://jquery.com
* jQuery Mobile from http://jquerymobile.com
* jQuery Mobile Router from https://github.com/azicchetti/jquerymobile-router
* Handlebars from http://handlebarsjs.com
* FastClick from https://github.com/ftlabs/fastclick

Instructions
============
1. Clone this project
2. Create a "plugins" and "platforms" directories
3. Add plugins and desired platforms

    ```bash
    # recommended minimal plugins
    cordova plugin add org.apache.cordova.console
    cordova plugin add org.apache.cordova.dialogs
    cordova plugin add org.apache.cordova.splashscreen
    cordova plugin add org.apache.cordova.statusbar
    
    # add platforms 
    cordova platform add ios
    cordova platform add android
    ```

4. Edit `www/config.xml`
5. Run the app

    ```bash
    # In a browser
    cordova serve
    # Then, navigate to http://localhost:8000/ios/www/ (replace `ios` with any platform you installed)
    
    # In an emulator (replace `ios` with an installed platform)
    cordova emulate ios
    
    # On the device (replace `ios` with an installed platform)
    cordova build ios
    cordova run ios
    ```
