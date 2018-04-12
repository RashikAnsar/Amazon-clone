# Angular Clone App

### Folder Structure
    +Amazon_Clone
        |
        + client
        + server
        --Readme.md

### Configuration before running app

**Create config.js file in server directory**
```
// Code in the config.js

module.exports = {
    database: '',
    port: process.env.PORT || 3030,
    secret: 'ImSecret',
    awsaccessId: "",    // aws accessId 
    awsSecretKey: "",   // aws secret key
    awsBucket: '',      // aws bucket name
    algoAppId: '',      // algolia app id
    algoAppKey: '',     // algolia app key
    algoIndexName: '',  // algolia index name
    stripeAPI_KEY: ''   // Stripe Secret api key
};
```
* After creating this file open _**client/src/app/environmet/*.ts**_ change stripe public key to respective stripe account's public key  


### Run the app

Run these commands in server directory
```
npm install
node server.js // Server runs on localhost:3030
```

Run these commands in client directory
```
npm install
ng serve    // Check localhost:4200
```
