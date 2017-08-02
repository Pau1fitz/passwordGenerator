## Password-gen

## Installation

```
  $ npm install password-gen --save
```

## Usage

```javascript
  var passwordGen = require('password-gen');
  //this will default to a password wuth a length of 8 characters
  var password = passwordGen();
  //you can also specify the number of characters you want in your password
  var password = passwordGen(10);
  console.log(password);
```
##License
WTFPL License
