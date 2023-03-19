import { getData } from '@/utilities/restUtil'

export const getGithubUser = async () => {
  return await getData('https://api.github.com/users/google')
}
