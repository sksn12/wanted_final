import { MdDashboard, MdSearch } from 'react-icons/md'
import { RiMapPinLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { GoGraph } from 'react-icons/go'

import styles from './sidebar.module.scss'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <nav className={styles.container}>
      <header>
        <MdDashboard size='30px' />
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
          <Link to='/serach'>
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
