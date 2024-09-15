import { randomUUID } from 'node:crypto'

export type UserDb = {
  id: number
  name: string
  username: string
  email: string
  address: LocationAddress
  phone: string
  website: string
  company: TinyCompanyData
}

export type LocationAddress = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: LatLng
}

export type TinyCompanyData = {
  name: string
  catchPhrase: string
  bs: string
}

export type LatLng = {
  lat: string
  lng: string
}

export type UserId = `User:${string}`

export async function getAllUsers(): Promise<UserDb[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) throw new Error('Failed to fetch users')
  return response.json() as Promise<UserDb[]>
}

export function createUserId(): UserId {
  return `User:${randomUUID()}`
}
