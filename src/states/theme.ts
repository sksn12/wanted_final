import { atom } from 'recoil'

export const darkModeState = atom<string>({
  key: 'darkmode',
  default: 'light',
})
