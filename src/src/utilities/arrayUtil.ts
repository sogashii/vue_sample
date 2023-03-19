/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * uniqueな配列を返す
 *
 * @param {any[]} array 対象の配列
 * @returns {any[]} uniqueな配列
 */
export const arrayUnique = (array: any[]): any[] => {
  const knownElements: any[] = []
  const uniquedArray: any[] = []

  for (const elem of array) {
    if (elem in knownElements) {
      continue
    }
    uniquedArray.push(elem)
    knownElements[elem] = true
  }

  return uniquedArray
}
