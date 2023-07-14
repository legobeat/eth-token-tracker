const test = require('tape')
const { BigNumber } = require('@ethersproject/bignumber')
const util = require('../../lib/util')

test('token balance stringify 1', function (t) {
  const hex = '000000000000000000000000000000000000000000000000119f00ef7cc00ee4'
  const balance = BigNumber.from(hex)
  const decimals = BigNumber.from(18)

  const result = util.stringifyBalance(balance, decimals)

  t.equal(result, '1.269', 'Creates correct balance.')
  t.end()
})

test('token balance stringified with 5 decimals when balance decimals are specified', function (t) {
  const hex = '000000000000000000000000000000000000000000000000119f00ef7cc00ee4'
  const balance = BigNumber.from(hex)
  const decimals = BigNumber.from(18)
  const balanceDecimals = 5;

  const result = util.stringifyBalance(balance, decimals, balanceDecimals)

  t.equal(result, '1.26973', 'Creates correct balance.')
  t.end()
})

test('token balance stringified with 0 decimals when balance decimals are specified', function (t) {
  const hex = '000000000000000000000000000000000000000000000000119f00ef7cc00ee4'
  const balance = BigNumber.from(hex)
  const decimals = BigNumber.from(18)
  const balanceDecimals = 0;

  const result = util.stringifyBalance(balance, decimals, balanceDecimals)

  t.equal(result, '1', 'Creates correct balance.')
  t.end()
})

test('token balance stringify 2', function (t) {
  const balance = BigNumber.from(15)
  const decimals = BigNumber.from(0)

  const result = util.stringifyBalance(balance, decimals)

  t.equal(result, '15', 'Creates correct balance.')
  t.end()
})

test('token balance stringify 3', function (t) {
  const balance = BigNumber.from(15)
  const decimals = BigNumber.from(1)

  const result = util.stringifyBalance(balance, decimals)

  t.equal(result, '1.5', 'Creates correct balance.')
  t.end()
})

test('token balance stringify 4', function (t) {
  const balance = BigNumber.from('120')
  const decimals = BigNumber.from(4)

  const result = util.stringifyBalance(balance, decimals)

  t.equal(result, '0.012', 'Creates correct balance.')
  t.end()
})

test('token balance stringify 5', function (t) {
  const balance = BigNumber.from('1200')
  const decimals = BigNumber.from(4)

  const result = util.stringifyBalance(balance, decimals)

  t.equal(result, '0.12', 'Creates correct balance.')
  t.end()
})
