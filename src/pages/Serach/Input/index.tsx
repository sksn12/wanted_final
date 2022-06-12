import styles from './input.module.scss'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useSetRecoilState } from 'recoil'
import { SearchValueState } from 'states/search'
import { ChangeEvent, FormEvent, useState } from 'react'
import { getSearchData } from 'services/naverSearch'
import { searchItemType } from 'types/search'

const Input = () => {
  const setSearchItem = useSetRecoilState(SearchValueState)
  const [content, setContent] = useState('')

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setContent(value)
  }

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    // 리액트 쿼리로 엔터말고 값이 변할때로 로직변경
    getSearchData(content).then((item: searchItemType[]) => {
      console.log(item)

      setSearchItem(item)
    })
  }

  const handleSubmitClick = () => {
    handleSubmit()
  }

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <div className={styles.iconBox}>
        <BiSearchAlt2 size='24px' />
      </div>
      <input type='text' className={styles.input} value={content} onChange={handleContentChange} />
      <button className={styles.searchBtn} type='button' onClick={handleSubmitClick}>
        검색
      </button>
    </form>
  )
}

export default Input
