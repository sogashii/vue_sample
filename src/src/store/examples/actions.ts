import { getGithubUser } from '@/gateways/apis/getGithubUser'
import { CommitRequest } from '../utilities/types'

export const fetchGithubUser = async ({ commit }: CommitRequest) => {
  commit('fetchGithubUserRequested')
  try {
    const githubUser = await getGithubUser()
    commit('fetchGithubUserSucceeded', githubUser)
  } catch (error) {
    commit('fetchGithubUserFailed')
  }
}
