# Test harness for ui-leafet-draw

### Requirements

 - NodeJS
 - Docker (for the nginx script), you can work around this though
 - git

## How to use

This is a test harness to reproduce what I'm trying to fix in https://github.com/angular-ui/ui-leaflet-draw/pull/18.

Steps to reproduce the problem:

        git clone (this repo)
        npm i
        npm run build # performs minification with webpack
        run-nginx.sh # serves the 'dist' dir with a webserver
        # open http://localhost:8080 with a browser

Expected:
The page loads and you can see the ui-leaflet-draw test page. The map should be shown and you can draw features.

Actual:
The page loads with an error in the console, e.g:

        angular.js:14199 Error: [$injector:unpr] Unknown provider: tProvider <- t
        http://errors.angularjs.org/1.5.11/$injector/unpr?p0=tProvider%20%3C-%20t
            at angular.js:68
            at angular.js:4563
            at Object.i [as get] (angular.js:4716)
            at angular.js:4568
            at i (angular.js:4716)
            ...snip...

## Apply the fix

        apply-patch.sh # script to patch the `ui-leaflet-draw.js` file in node_modules
        npm run build
        run-nginx.sh
        # open http://localhost:8080 with a browser

Now the page will load and work as expected.