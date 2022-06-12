import styles from './result.module.scss'
import { BiSearchAlt2 } from 'react-icons/bi'
import { RiArrowLeftUpLine } from 'react-icons/ri'
import { useRecoilValue } from 'recoil'
import { SearchValueState } from 'states/search'

const Result = () => {
  const searchItem = useRecoilValue(SearchValueState)

  return (
    <section className={styles.container}>
      <ul>
        {searchItem.map((item) => (
          <li key={`item-${item.productId}`}>
            <div className={styles.iconBox}>
              <BiSearchAlt2 size='12px' fill='white' />
            </div>
            <p className={styles.content}>{item.title}</p>
            <RiArrowLeftUpLine size='18px' fill='#A09EA2' />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Result
