/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { inject } from 'vue'

/**
 * GETメソッドでデータを取得する
 *
 * @param url URL
 * @returns 取得データ
 */
export const getData = async (url: string) => {
  const axios: any = inject('axios')

  return axios.get(url)
}

/**
 * DELETEメソッドでデータを削除する
 * （メソッド名をdeleteとするとエラーとなったため、deleteDataとした）
 *
 * @param url URL
 * @returns 削除結果
 */
export const deleteData = async (url: string) => {
  const axios: any = inject('axios')

  return axios.delete(url)
}

/**
 * POSTメソッドでデータを登録する
 *
 * @param url URL
 * @param params パラメータ
 * @returns 登録結果
 */
export const postData = async (url: string, params?: any) => {
  const axios: any = inject('axios')

  if (params) {
    return axios.post(url, params)
  } else {
    return axios.post(url)
  }
}

/**
 * PUTメソッドでデータを更新する
 *
 * @param url URL
 * @param params パラメータ
 * @returns 更新結果
 */
export const putData = async (url: string, params?: any) => {
  const axios: any = inject('axios')

  if (params) {
    return axios.put(url, params)
  } else {
    return axios.put(url)
  }
}

/**
 * PATCHメソッドでデータを更新する
 *
 * @param url URL
 * @param params パラメータ
 * @returns 更新結果
 */
export const patchData = async (url: string, params?: any) => {
  const axios: any = inject('axios')

  if (params) {
    return axios.patch(url, params)
  } else {
    return axios.patch(url)
  }
}

/**
 * インターセプタを設定する
 */
export const registerInterceptors = () => {
  axios.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      console.log(error)
      return Promise.reject(error)
    }
  )
}
