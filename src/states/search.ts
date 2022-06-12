import { searchItemType } from '../types/search'
import { atom } from 'recoil'

export const SearchValueState = atom<searchItemType[] | []>({
  key: 'searchValue',
  default: [],
})
