import styles from './input.module.scss'
import { BiSearchAlt2 } from 'react-icons/bi'
import logo from 'assets/logo/NAVER_Logo_Green.png'

const Input = () => {
  return (
    <section className={styles.container}>
      <div className={styles.logoBox}>
        <img src={logo} className={styles.logo} alt='logo' />
      </div>

      <form className={styles.search}>
        <div className={styles.iconBox}>
          <BiSearchAlt2 size='24px' />
        </div>
        <input type='text' className={styles.input} />
        <button className={styles.searchBtn} type='button'>
          검색
        </button>
      </form>
    </section>
  )
}

export default Input
