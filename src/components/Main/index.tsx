import { PlusCircle } from 'phosphor-react'

import styles from './styles.module.css'

export function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">Criar <PlusCircle size={16} weight="bold"/></button>
      </div>
    </main>
  )
}