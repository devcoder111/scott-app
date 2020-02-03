# Quasar(Vue) Firebase Music App

## Firebase Config

Set up your Firebase app in the console and get your configuration
for web apps.

## Quasar Framework installation

Quasar CLI Documentation http://quasar-framework.org/guide/quasar-cli.html

If you need, you can upgrade Quasar version following next Upgrade Guide
https://quasar-framework.org/guide/quasar-upgrade-guide.html


## Installation

`$ git clone https://github.com/devcoder111/scott-app.git <folder-name>`

Download this repository, paste their files into your quasar project and run:

`$ npm install`

Replace the config values of your firebase app into file `src/boot/firebase.json`

```
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "..."
  
```

## Run

`$ quasar dev`

## Logic of this app.

 ### Database logic with firebase
 
 Look at this file "src/store-auth.js" : As vuex part, this file involes the login and register using Firebase Auth with an email address and password
 `src/store-settings.js` this file involves functionos of the Reading the friends list, Adding, Updating the friends and uploading mp3 file.
