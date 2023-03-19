/* eslint-disable @typescript-eslint/no-explicit-any */
export const getGithubUser = (state: any) => {
  return state.githubUser
}

export const isGithubUserFetching = (state: any): boolean => {
  return state.isGithubUserFetching
}
