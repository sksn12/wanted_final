import styles from './input.module.scss'
import { BiSearchAlt2 } from 'react-icons/bi'

const Input = () => {
  return (
    <form className={styles.search}>
      <div className={styles.iconBox}>
        <BiSearchAlt2 size='24px' />
      </div>
      <input type='text' className={styles.input} />
      <button className={styles.searchBtn} type='button'>
        검색
      </button>
    </form>
  )
}

export default Input
