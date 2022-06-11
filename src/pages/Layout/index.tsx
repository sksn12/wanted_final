import { Outlet } from 'react-router-dom'
import Header from './Header'
import styles from './layout.module.scss'
import SideBar from './Sidebar'
import cx from 'classnames'
import { useRecoilValue } from 'recoil'
import { darkModeState, dashBoardState } from 'states/layout'

const Layout = () => {
  const theme = useRecoilValue(darkModeState)
  const dashBoard = useRecoilValue(dashBoardState)

  return (
    <section className={cx(styles.page, { [styles.pageDark]: theme === 'dark' })}>
      <div className={cx(styles.container, { [styles.dashBoardTure]: dashBoard })}>
        {!dashBoard ? (
          <>
            <SideBar />
            <section>
              <Header />
              <section className={styles.main}>
                <Outlet />
              </section>
            </section>
          </>
        ) : (
          <div />
        )}
      </div>
    </section>
  )
}

export default Layout
