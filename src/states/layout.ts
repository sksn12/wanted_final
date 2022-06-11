import { atom } from 'recoil'

export const darkModeState = atom<string>({
  key: 'darkmode',
  default: 'light',
})

export const dashBoardState = atom<boolean>({
  key: 'dashBoard',
  default: false,
})
