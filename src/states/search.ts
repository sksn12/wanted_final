import { atom } from 'recoil'

export const SearchValueState = atom<string>({
  key: 'searchValue',
  default: '',
})
