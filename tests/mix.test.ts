import { describe, test, expect } from 'vitest'
import { mixColors } from '../src/mix'

describe('mixColors', () => {
  test('mixes red and blue to purple', () => {
    expect(mixColors('#ff0000', '#0000ff')).toBe('#800080')
  })

  test('mixes equal colors returns same', () => {
    expect(mixColors('#00ff00', '#00ff00')).toBe('#00ff00')
  })

  test('handles shorthand hex', () => {
    expect(mixColors('#f00', '#00f')).toBe('#800080')
  })

  test('mixes black and white to gray', () => {
    expect(mixColors('#000000', '#ffffff')).toBe('#808080')
  })
})
