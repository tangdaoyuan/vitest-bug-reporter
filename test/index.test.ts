import { expect, it } from 'vitest'
import { invoke } from '@'

it('runs', async() => {
  expect(await invoke()).toBeDefined()
})
