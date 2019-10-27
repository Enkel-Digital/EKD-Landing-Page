# Landing page for Enkel Digital
This is the page that is served before the Vue JS app is deployed.  
This landing page is built with a template from Color Lib, credits to them.  

---
## Dependencies
This project uses the "http-minifier" as an optional dependency.  
It is used for minification of the files, however even without it, the webpage can still be served.

---
## Files
- index.html
    - This is the entry HTML file for the website, but this is not user created.
    - This is a minified file that is generated with the "html-minifier" tool
    - Is auto generated when deploying to firebase with npm script
    - This is generated from the "dev.html" file
- dev.html
    - This is the actual index.html file for development.
    - This is the file in which the "index.html" file is generated from.
- Others
    - All the assets are in their respective folder
    - Since this is a landing page, there is just 1 main file with supporting assets.

---
## Build and Deploy
Build process of the landing page is super simple with built in NPM scripts to run.  
Building is just where the main index.html file is minified/uglified to reduce size.  

To "build" landing page
```bash
# Run the "build" script included in the package.json file
# This should build the "dev.html" file into the output file "index.html"
# You can then use any server to serve from this directory.
npm run build
```

To deploy the landing page to firebase
```bash
# Run the "build" script included in the package.json file
# This builds the landing page before calling firebase cli to deploy to hosting
# This script relies on the npm run build script
npm run deploy
```