import styles from './result.module.scss'
import { BiSearchAlt2 } from 'react-icons/bi'
import { RiArrowLeftUpLine } from 'react-icons/ri'

const Result = () => {
  return (
    <section className={styles.container}>
      <ul>
        <li>
          <div className={styles.iconBox}>
            <BiSearchAlt2 size='12px' fill='white' />
          </div>
          <p className={styles.content}>여기에 글</p>
          <RiArrowLeftUpLine size='18px' fill='#A09EA2' />
        </li>
      </ul>
    </section>
  )
}

export default Result
