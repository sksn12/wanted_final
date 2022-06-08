import { useRecoilState, useSetRecoilState } from 'recoil'
import { darkModeState } from 'states'
import styles from './header.module.scss'
import cx from 'classnames'
import { AiOutlineLogout } from 'react-icons/ai'
import { loginState } from 'states/login'

const Header = () => {
  const [theme, setTheme] = useRecoilState(darkModeState)
  const setLogin = useSetRecoilState(loginState)
  // const params=useParamas

  const handleThemeClick = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const handleLogOut = () => {
    sessionStorage.removeItem('userId')
    setLogin('')
  }

  return (
    <header className={styles.container}>
      <h2>Title</h2>
      <div className={styles.headerThemeBox}>
        <button className={styles.logOutBox} onClick={handleLogOut} type='button'>
          <AiOutlineLogout size='28px' />
        </button>
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
