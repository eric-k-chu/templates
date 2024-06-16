import type { UserDb } from './promise'

export const testUsers = [stubUserDb({ id: 1, name: 'John' }), stubUserDb({ id: 2, name: 'Jane' })]

export function stubUserDb(partial?: Partial<UserDb>): UserDb {
  return {
    id: 1,
    name: 'John',
    username: 'johndoe',
    email: 'johndoe@example.com',
    address: {
      street: '123 Main St',
      suite: 'Apt 101',
      city: 'Main City',
      zipcode: '12345',
      geo: {
        lat: '0',
        lng: '0',
      },
    },
    phone: '123-456-7890',
    website: 'example.com',
    company: {
      name: 'Example Inc',
      catchPhrase: 'Hello, World!',
      bs: 'Business',
    },
    ...partial,
  }
}
