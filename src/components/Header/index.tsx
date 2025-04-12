import rocket from '../../assets/rocket.svg'
import logo from '../../assets/logo.svg'

import styles from './styles.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={rocket} alt="Rocket icon" />
        <img className={styles.todo} src={logo} alt="ToDo List Logo" />
      </div>
    </header>
  )
}