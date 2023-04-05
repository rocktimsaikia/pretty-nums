import { test, assert } from "vitest"
import prettyNums from "../src"

test("Should format numbers correctly", () => {
  assert.strictEqual(prettyNums(42), "42")
  assert.strictEqual(prettyNums(1234), "1.2K")
  assert.strictEqual(prettyNums(5000), "5.0K")
  assert.strictEqual(prettyNums(2500000), "2.5M")
  assert.strictEqual(prettyNums(123456789), "123.5M")
  assert.strictEqual(prettyNums(9876543210), "9.9B")
  assert.strictEqual(prettyNums(1234567890123), "1.2T")
})

test("Should handle negative numbers", () => {
  assert.strictEqual(prettyNums(-42), "-42")
  assert.strictEqual(prettyNums(-1234), "-1.2K")
  assert.strictEqual(prettyNums(-2500000), "-2.5M")
  assert.strictEqual(prettyNums(-9876543210), "-9.9B")
})
