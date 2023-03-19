import { User } from '@/types/User'
import { CommitRequest } from '../utilities/types'

export const setUser = ({ commit }: CommitRequest, user: User) => {
  commit('setUser', user)
}
