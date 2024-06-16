import { describe, expect, it, vi } from 'vitest'
import { createUserId, getAllUsers } from './promise'
import { testUsers } from './promise.utils'

vi.mock('./promise', async (importOriginal) => {
  const modules = await importOriginal<typeof import('./promise')>()
  return {
    ...modules,
    getAllUsers: vi.fn(),
  }
})

vi.mocked(getAllUsers).mockImplementation(() => {
  return Promise.resolve(testUsers)
})

describe('Mock Test', () => {
  it('should be able to fetch users', async () => {
    const users = await getAllUsers()
    expect(users.length).toBe(2)
    expect(users[0].name).toBe('John')
    expect(users[1].name).toBe('Jane')
  })
})

describe('createUserId (implementation should remain the same)', () => {
  it('should create a new user id', () => {
    expect(createUserId()).toMatch(/^User:/)
  })
})
