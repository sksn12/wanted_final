import { useRecoilState } from 'recoil'
import { darkModeState } from 'states'
import styles from './header.module.scss'
import cx from 'classnames'

const Header = () => {
  const [theme, setTheme] = useRecoilState(darkModeState)

  const handleThemeClick = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <header className={styles.container}>
      <h2>Title</h2>
      <div className={styles.headerThemeBox}>
        <div className={cx(styles.toglelight, { [styles.togleDark]: theme === 'dark' })}>
          <button
            type='button'
            aria-label='theme'
            onClick={handleThemeClick}
            className={cx(styles.togleBtnLight, { [styles.togleBtnDark]: theme === 'dark' })}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
