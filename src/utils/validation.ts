export function emailCheck(email: string) {
  // eslint-disable-next-line
  const reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i

  return reg.test(email)
}

export function loginVal(id: string, password: string) {
  if (id === 'sksn12@naver.com' && password === '123') return true
  return false
}
