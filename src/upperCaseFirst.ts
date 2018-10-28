const cache: { [key: string]: string } = Object.create(null)

/**
 * 转换 str 的首字母为大写。
 *
 * @param str 要转换的字符串
 * @returns 转换后的字符串
 */
export default function upperCaseFirst(str: string): string {
  if (!str || typeof str !== 'string') {
    return str
  }
  if (!(str in cache)) {
    cache[str] = str.charAt(0).toUpperCase() + str.slice(1)
  }
  return cache[str]
}
