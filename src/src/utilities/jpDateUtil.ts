import moment from 'moment'

/**
 * 現在の日付を取得する
 *
 * @returns {Date} 現在日付
 */
export const now = (): Date => {
  return new Date()
}

/**
 * 文字列を日付に変換する
 * @param {string} date 対象日付
 * @param {string} format フォーマット
 * @returns {Date?} Date型の日付
 */
export const toDate = (date: string, format: string): Date | null => {
  if (!date) {
    return null
  }

  if (!format) {
    format = 'YYYYMMDD'
    if (0 <= date.indexOf('/') && 0 <= date.indexOf(':')) {
      format = 'YYYY/MM/DD HH:mm:ss'
    } else if (0 <= date.indexOf('-') && 0 <= date.indexOf(':')) {
      format = 'YYYY-MM-DD HH:mm:ss'
    } else if (0 <= date.indexOf('/')) {
      // yyyy/MM/dd
      if (date.indexOf('/') === date.lastIndexOf('/')) {
        // yyyy/MM → yyyy/MM/dd
        date += '/01'
      }
      format = format = 'YYYY/MM/DD'
    } else if (0 <= date.indexOf('-')) {
      if (date.indexOf('-') === date.lastIndexOf('-')) {
        // yyyy-MM → yyyy-MM-dd
        date += '-01'
      }
      format = format = 'YYYY-MM-DD'
    } else {
      if (date.length === 12) {
        format = 'YYYYMMDDHHmm'
      } else if (date.length === 14) {
        format = 'YYYYMMDDHHmmss'
      } else if (date.length === 6) {
        format = 'YYYYMMDD'
        date += '01'
      }
    }
  }

  return moment(date, format).toDate()
}

/**
 * 日本の日付形式に変換
 *
 * @param {Date} date 対象日付
 * @returns {string} yyyy年MM月dd日（曜日）
 */
export const convertJpDate = (date: Date): string => {
  const year = ('0000' + date.getFullYear()).slice(-4)
  const month = ('00' + (date.getMonth() + 1)).slice(-2)
  const day = ('00' + date.getDate()).slice(-2)
  const dayOfWeekStr = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()]
  const jpDate = year + '年' + month + '月' + day + '日 (' + dayOfWeekStr + ')'
  return jpDate
}

/**
 * 日付を'yyyy-MM-dd'形式に変換し、その月の最初日を返却する
 *
 * @param {Date} date 対象日付
 * @returns {string} 対象日付の月初日の'yyyy-MM-dd'形式文字列
 */
export const convertYmdHyphenStart = (date: Date): string => {
  const year = ('0000' + date.getFullYear()).slice(-4)
  const month = ('00' + (date.getMonth() + 1)).slice(-2)
  const ret = year + '-' + month + '-' + '01'
  return ret
}

/**
 * 日付を'yyyy-MM-dd'形式に変換
 *
 * @param {Date} date 対象日付
 * @returns {string} 'yyyy-MM-dd'
 */
export const convertYmdHyphen = (date: Date): string => {
  const year = ('0000' + date.getFullYear()).slice(-4)
  const month = ('00' + (date.getMonth() + 1)).slice(-2)
  const day = ('00' + date.getDate()).slice(-2)
  const ret = year + '-' + month + '-' + day
  return ret
}

/**
 * 文字列の日付を'yyyyMMdd'形式に変換
 *
 * @param {string} dateStr 対象日付文字列
 * @returns {string} 'yyyyMMdd'
 */
export const convertYmd = (dateStr: string): string => {
  const date = new Date(dateStr)
  const year = ('0000' + date.getFullYear()).slice(-4)
  const month = ('00' + (date.getMonth() + 1)).slice(-2)
  const day = ('00' + date.getDate()).slice(-2)
  const ret = year + month + day
  return ret
}

/**
 * 文字列の日付を'yyyy-MM-dd HH:mm:ss'形式に変換
 *
 * @param {string} dateStr 対象日付文字列
 * @returns {string} 'yyyy-MM-dd HH:mm:ss'
 */
export const convertYmdhms = (dateStr: string) => {
  const date = new Date(dateStr)
  const year = ('0000' + date.getFullYear()).slice(-4)
  const month = ('00' + (date.getMonth() + 1)).slice(-2)
  const day = ('00' + date.getDate()).slice(-2)
  const hour = ('00' + date.getHours()).slice(-2)
  const min = ('00' + date.getMinutes()).slice(-2)
  const sec = ('00' + date.getSeconds()).slice(-2)
  const ret = year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec
  return ret
}

/**
 * フォーマットする
 *
 * @param {string} format フォーマット
 * @returns {string} フォーマットされた文字列
 */
export const format = (format: string, ...args: string[]) => {
  return format.replace(/\{(\d+)\}/g, (m, k) => {
    return args[k] !== undefined && args[k] !== null ? args[k] : ''
  })
}

/**
 * HHmmをHH:mmに変換
 *
 * @param {string} hm 'HHmm'
 * @returns {string} 'HH:mm'
 */
export const addColonToHm = (hm: string): string => {
  return hm.slice(0, 2) + ':' + hm.slice(2, 4)
}

/**
 * HH:mmをHHmmに変換
 *
 * @param {string} hmColon 'HH:mm'
 * @returns {string} 'HHmm'
 */
export const removeColonFromHm = (hmColon: string): string => {
  return hmColon.slice(0, 2) + ':' + hmColon.slice(3, 5)
}

/**
 * HH:mmの文字列を数値に変換
 *
 * @param {string} hmColon 'HH:mm'
 * @returns {number} 時間
 */
export const hmToMin = (hmColon: string): number => {
  const hmArr = hmColon.split(':')
  return parseInt(hmArr[0]) * 60 + parseInt(hmArr[1])
}
