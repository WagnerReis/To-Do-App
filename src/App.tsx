import { Header } from './components/Header'
import { Main } from './components/Main'

import './global.css'
import styles from './app.module.css'

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Main />
      </div>
    </>
  )
}

export default App
