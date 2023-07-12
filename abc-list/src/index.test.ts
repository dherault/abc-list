import { describe, expect, test } from '@jest/globals'

import { fromAbc, toAbc } from '.'

describe('fromAbc', () => {
  test('a -> 0', () => {
    expect(fromAbc('a')).toBe(0)
  })
  test('b -> 1', () => {
    expect(fromAbc('b')).toBe(1)
  })
  test('z -> 25', () => {
    expect(fromAbc('z')).toBe(25)
  })
  test('aa -> 26', () => {
    expect(fromAbc('aa')).toBe(26)
  })
  test('az -> 51', () => {
    expect(fromAbc('az')).toBe(51)
  })
  test('zz -> 701', () => {
    expect(fromAbc('zz')).toBe(701)
  })
  test('aaa -> 702', () => {
    expect(fromAbc('aaa')).toBe(702)
  })
})

describe('toAbc', () => {
  test('a <- 0', () => {
    expect(toAbc(0)).toBe('a')
  })
  test('b <- 1', () => {
    expect(toAbc(1)).toBe('b')
  })
  test('z <- 25', () => {
    expect(toAbc(25)).toBe('z')
  })
  test('aa <- 26', () => {
    expect(toAbc(26)).toBe('aa')
  })
  test('az <- 51', () => {
    expect(toAbc(51)).toBe('az')
  })
  test('zz <- 701', () => {
    expect(toAbc(701)).toBe('zz')
  })
  test('aaa <- 702', () => {
    expect(toAbc(702)).toBe('aaa')
  })
})

describe('fromAbc(toAbc(x))', () => {
  test('0 -> 1000', () => {
    for (let i = 0; i < 1000; i++) {
      expect(fromAbc(toAbc(i))).toBe(i)
    }
  })
})
