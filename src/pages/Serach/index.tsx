import { useRecoilValue } from 'recoil'
import { darkModeState } from 'states/layout'
import { cx } from 'styles'
import Input from './Input'
import Result from './Result'
import styles from './serach.module.scss'
import logo from 'assets/logo/NAVER_Logo_Green.png'
import darkLogo from 'assets/logo/NAVER_Logo_White.png'

const SerachPage = () => {
  const theme = useRecoilValue(darkModeState)

  return (
    <section className={cx(styles.container, { [styles.darkContainer]: theme === 'dark' })}>
      <div className={styles.search}>
        <section className={styles.header}>
          <div className={styles.logoBox}>
            {theme === 'light' ? (
              <img src={logo} className={styles.logo} alt='logo' />
            ) : (
              <img src={darkLogo} className={styles.logo} alt='darklogo' />
            )}
          </div>
          <Input />
          <Result />
        </section>
      </div>
    </section>
  )
}

export default SerachPage
