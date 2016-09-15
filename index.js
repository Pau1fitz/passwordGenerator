'use strict';
const combination = 'abcdefghijklmnopqrstuvwxyz123456789!@#$%^&*()';
const password = '';

module.exports = function(length) {
	if (!length) {
		length = 8;
	}
	var password = '';
	for(var i = 0; i < length; i++) {
		password += combination.charAt(Math.floor(Math.random() * combination.length));
	}
	return password;
}
