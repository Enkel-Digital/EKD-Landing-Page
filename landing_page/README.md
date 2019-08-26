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
Build process of the landing page is rather simple for now, where the main file is minified/uglified.  

To "build" the file
```bash
# Run the build script included in the package.json file
# This should build the "dev.html" file into the output file "index.html"
npm run build
```

To deploy the landing_page
```bash
# Assuming the firebase.json file in the repo's root directory has been configured to host the "landing_page/" directory.
# Deploy landing_page to firebase hosting.
firebase deploy
```