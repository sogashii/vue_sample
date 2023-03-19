/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '@/types/User'

export const fetchGithubUserRequested = (state: any, payload: User) => {
  state.githubUser = payload
  state.isGithubUserFetching = true
}

export const fetchGithubUserSucceeded = (state: any) => {
  state.isGithubUserFetching = false
}

export const fetchGithubUserFailed = (state: any) => {
  state.isGithubUserFetching = false
}
