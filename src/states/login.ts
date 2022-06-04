import { atom } from 'recoil'

export const loginState = atom<string | null>({
  key: 'login',
  default: sessionStorage.getItem('userId'),
})
