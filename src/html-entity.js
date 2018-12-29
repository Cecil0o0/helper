/*
 * @Author: Cecil0o0
 * @Date: 2018-12-29 13:41:00
 * @LastEditors: chenhaojie
 * @LastEditTime: 2018-12-29 13:54:06
 * @Email: jiegithub@gmail.com
 * @Description: HTML实体编解码工具
 */

function char2HTMLEntity(char) {
  if (typeof char !== 'string') return char
  return `&#x${char.codePointAt().toString(16)};`
}
function HTMLEntity2Char(entity) {
  try {
    let hex = entity.match(/&#x([a-zA-Z\d]*);/)[1] || ''
    if (!hex) return entity
    hex = `0x${hex}`
    return String.fromCodePoint(hex)
  } catch(e) {
    console.log(e)
    return entity
  }
}
function Str2HTMLEntities(str) {
  if (typeof str !== 'string') return str
  return str.split('').map(char => char2HTMLEntity(char)).join('')
}
function HTMLEntities2Str(htmlEntities) {
  try {
    return htmlEntities.replace(/&#x[a-zA-Z\d]*;/g, (c0) => {
      return HTMLEntity2Char(c0)
    })
  } catch(e) {
    console.log(e)
    return htmlEntities
  }
}

module.exports = {
  encode: Str2HTMLEntities,
  decode: HTMLEntities2Str
}
