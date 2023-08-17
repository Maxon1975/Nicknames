import Validator from '../basic';

test('should validate usernames', () => {
  expect(Validator.validateUsername('half-blood_394_Princess')).toBeTruthy();
  expect(Validator.validateUsername('half-blood_394_Принцесса')).toBeFalsy(); // нельзя кириллицу
  expect(Validator.validateUsername('half.blood!394"Princess')).toBeFalsy(); // нельзя символы, кроме тире и подчеркивания
  expect(Validator.validateUsername('half-blood_394555_Princess')).toBeFalsy(); // нельзя подряд более трёх цифр
  expect(Validator.validateUsername('1half-blood_394_Princess')).toBeFalsy(); // нельзя, чтобы начиналось цифрой
  expect(Validator.validateUsername('half-blood_394_Princess1')).toBeFalsy(); // нельзя, чтобы заканчивалось цифрой
  expect(Validator.validateUsername('-half-blood_394_Princess')).toBeFalsy(); // нельзя, чтобы начиналось символом тире
  expect(Validator.validateUsername('half-blood_394_Princess-')).toBeFalsy(); // нельзя, чтобы заканчивалось символом тире
  expect(Validator.validateUsername('_half-blood_394_Princess')).toBeFalsy(); // нельзя, чтобы начиналось символом подчеркивания
  expect(Validator.validateUsername('half-blood_394_Princess_')).toBeFalsy(); // нельзя, чтобы заканчивалось символом подчеркивания
});
