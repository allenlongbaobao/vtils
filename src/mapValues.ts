import forOwn, { ForOwnCallback } from './forOwn'

export type MapValuesResult<T> = { [key in keyof T]: any }

/**
 * 映射对象的可枚举属性值为一个新的值。
 *
 * @param obj 要遍历的对象
 * @param callback 回调函数
 * @returns 映射后的新对象
 */
export default function mapValues<T extends object>(obj: T, callback: ForOwnCallback<T, keyof T>): MapValuesResult<T> {
  const newObj: MapValuesResult<T>  = {} as any
  forOwn(obj, (value, key, source) => {
    newObj[key] = callback(value, key, source)
  })
  return newObj
}