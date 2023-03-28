import test from 'ava';
import prettyNums from './index';

test('Should format numbers correctly', (t) => {
  t.is(prettyNums(42), '42');
  t.is(prettyNums(1234), '1.2K');
  t.is(prettyNums(5000), '5.0K');
  t.is(prettyNums(2500000), '2.5M');
  t.is(prettyNums(123456789), '123.5M');
  t.is(prettyNums(9876543210), '9.9B');
  t.is(prettyNums(1234567890123), '1.2T');
});

test('Should handle negative numbers', (t) => {
  t.is(prettyNums(-42), '-42');
  t.is(prettyNums(-1234), '-1.2K');
  t.is(prettyNums(-2500000), '-2.5M');
  t.is(prettyNums(-9876543210), '-9.9B');
});
