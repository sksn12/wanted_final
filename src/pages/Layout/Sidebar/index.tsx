import { MdDashboard, MdSearch } from 'react-icons/md'
import { RiMapPinLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { GoGraph } from 'react-icons/go'

import styles from './sidebar.module.scss'

const SideBar = () => {
  return (
    <nav className={styles.container}>
      <header>
        <MdDashboard size='30px' />
      </header>
      <ul>
        <li>
          <CgProfile size='26px' color='grey' />
        </li>
        <li>
          <RiMapPinLine size='26px' color='grey' />
        </li>
        <li>
          <MdSearch size='26px' color='grey' />
        </li>
        <li>
          <GoGraph size='26px' color='grey' />
        </li>
      </ul>
      {/* 뭘로 채울지 고민 */}
      <footer />
    </nav>
  )
}

export default SideBar
