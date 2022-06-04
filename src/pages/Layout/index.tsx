import { Outlet } from 'react-router-dom'
import Header from './Header'
import styles from './layout.module.scss'
import SideBar from './Sidebar'
import cx from 'classnames'
import { useRecoilValue } from 'recoil'
import { darkModeState } from 'states'

const Layout = () => {
  const theme = useRecoilValue(darkModeState)

  return (
    <section className={cx(styles.page, { [styles.pageDark]: theme === 'dark' })}>
      <div className={styles.container}>
        <SideBar />
        <section>
          <Header />
          <section className={styles.main}>
            <Outlet />
          </section>
        </section>
      </div>
    </section>
  )
}

export default Layout
