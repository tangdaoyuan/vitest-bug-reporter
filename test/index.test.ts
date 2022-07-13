import { expect, it } from 'vitest'
import { invoke } from '@'

it('runs', () => {
  expect(invoke()).toBe('world')
})
