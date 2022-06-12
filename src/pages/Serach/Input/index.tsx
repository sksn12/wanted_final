import styles from './input.module.scss'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useRecoilState } from 'recoil'
import { SearchValueState } from 'states/search'
import { ChangeEvent, FormEvent } from 'react'

const Input = () => {
  const [content, setContent] = useRecoilState(SearchValueState)

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setContent(value)
  }

  const handleSubmit = (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    console.log(content)
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
