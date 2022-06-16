import { MdDashboard, MdSearch } from 'react-icons/md'
import { RiMapPinLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { GoGraph } from 'react-icons/go'

import styles from './sidebar.module.scss'
import { Link } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { dashBoardState } from 'states/layout'

const SideBar = () => {
  const setDashBoard = useSetRecoilState(dashBoardState)

  const handleClick = () => {
    setDashBoard((prev) => !prev)
  }

  return (
    <nav className={styles.container}>
      <header>
        <MdDashboard size='30px' onClick={handleClick} />
      </header>
      <ul>
        <li>
          <Link to='/'>
            <CgProfile size='26px' color='grey' />
          </Link>
        </li>
        <li>
          <Link to='/map'>
            <RiMapPinLine size='26px' color='grey' />
          </Link>
        </li>
        <li>
          <Link to='/search'>
            <MdSearch size='26px' color='grey' />
          </Link>
        </li>
        <li>
          <Link to='/graph'>
            <GoGraph size='26px' color='grey' />
          </Link>
        </li>
      </ul>
      {/* 뭘로 채울지 고민 */}
      <footer />
    </nav>
  )
}

export default SideBar
