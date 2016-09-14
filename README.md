##Password-gen

## Installation

```
  $ npm install password-gen --save
```

## Usage

```javascript
  var passwordGen = require('password-gen');
  //this will default to a password wuth a length of 8 characters
  var password = passwordGen.generatePassword();
  //you can also specify the number of characters you want in your password
  var password = passwordGen.generatePassword(10);
  console.log(password);
```
