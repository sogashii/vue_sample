import { User } from '@/types/User'

/* eslint-disable @typescript-eslint/no-explicit-any */
export const isAuthenticated = (state: any): boolean => {
  return Object.keys(state.user).length !== 0
}

export const getUser = (state: any): User => {
  return state.user
}
