/**
 * @author: Jerry Zou
 * @email: jerry.zry@outlook.com
 */

'use strict'

export let urlParams = {}

// handle with params in url
let url = location.href
  , loc = url.search(/\?/)
  , params
if (loc != -1) {
  url = url.substr(loc + 1)
  params = url.split('&')
  for (let i = 0; i < params.length; ++i) {
    let [key, value] = params[i].split('=')
    utils.urlParams[key] = value
  }
}

export function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export function formatNumber(num, interval = 3) {
  let numStr = num.toString()
  return [].reduce.call(numStr, (prev, c, index) => {
    let isSeperator = (numStr.length - index - 1) % interval === 0 && index !== numStr.length - 1
    return prev + c + (isSeperator ? ',' : '')
  }, '')
}