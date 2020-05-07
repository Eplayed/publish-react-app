
import md5 from 'md5'
// import cryptoJs from 'crypto-js'
const TokenKey = 'anji-token'

export function getToken() {
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.clear()
}

export function getKey(key) {
  return sessionStorage.getItem(key)
}

export function setKey(key, value) {
  return sessionStorage.setItem(key, value)
}

export function removeKey(key) {
  return sessionStorage.removeItem(key)
}

export function sign(param) {
  if (!param) {
    param = {}
  }
  const token = getToken() || ''
  const time = new Date().getTime()
  const cr = {
    token: token,
    time: time,
    reqData: JSON.stringify(param)
  }
  // 排序key
  const keyArr = []
  for (var item in cr) {
    if (item !== 'sign') {
      keyArr.push(item)
    }
  }
  keyArr.sort()
  // 生成加密
  let content = ''
  for (var i = 0; i < keyArr.length; i++) {
    const key = keyArr[i]
    const value = cr[key]
    content += key + value
  }
  // self.log('before sign：' + content)
  const signData = {
    token: token,
    time: time,
    reqData: param,
    sign: md5(content).toUpperCase()
  }
  // console.log('signData：' + JSON.stringify(signData))
  return signData
}

// des,加密
// export const encryptDes = (message, key) => {
//   var keyHex = cryptoJs.enc.Utf8.parse(key)
//   var option = { mode: cryptoJs.mode.ECB, padding: cryptoJs.pad.Pkcs7 }
//   var encrypted = cryptoJs.DES.encrypt(message, keyHex, option)
//   return encrypted.toString()
// }
