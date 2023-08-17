import Validator from './basic';

console.log('app worked');

console.log(Validator.validateUsername('half-blood_394_Princess'));
console.log(Validator.validateUsername('half-blood_394_Принцесса'));
console.log(Validator.validateUsername('half.blood!394"Princess'));
console.log(Validator.validateUsername('half-blood_394555_Princess'));
console.log(Validator.validateUsername('1half-blood_394_Princess'));
console.log(Validator.validateUsername('half-blood_394_Princess1'));
console.log(Validator.validateUsername('-half-blood_394_Princess'));
console.log(Validator.validateUsername('half-blood_394_Princess-'));
console.log(Validator.validateUsername('_half-blood_394_Princess'));
console.log(Validator.validateUsername('half-blood_394_Princess_'));
