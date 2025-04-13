import { PlusCircle } from 'phosphor-react'

import styles from './styles.module.css'

import clipboard from '../../assets/clipboard.svg'

import { Task } from '../Task'

const tasks = [
  {
    id: '1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    completed: false
  },
  {
    id: '2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum pariatur veniam explicabo, blanditiis vero quis accusantium unde. Necessitatibus ipsa dignissimos optio excepturi voluptates reprehenderit veritatis, eum tempore aliquid nulla!',
    completed: false
  },
  {
    id: '3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum pariatur veniam explicabo, blanditiis vero quis accusantium unde. Necessitatibus ipsa dignissimos optio excepturi voluptates reprehenderit veritatis, eum tempore aliquid nulla!',
    completed: false
  },
  {
    id: '4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum pariatur veniam explicabo, blanditiis vero quis accusantium unde. Necessitatibus ipsa dignissimos optio excepturi voluptates reprehenderit veritatis, eum tempore aliquid nulla!',
    completed: false
  },
  {
    id: '5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum pariatur veniam explicabo, blanditiis vero quis accusantium unde. Necessitatibus ipsa dignissimos optio excepturi voluptates reprehenderit veritatis, eum tempore aliquid nulla!',
    completed: false
  },
  {
    id: '6',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum pariatur veniam explicabo, blanditiis vero quis accusantium unde. Necessitatibus ipsa dignissimos optio excepturi voluptates reprehenderit veritatis, eum tempore aliquid nulla!',
    completed: false
  },
  {
    id: '7',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci earum pariatur veniam explicabo, blanditiis vero quis accusantium unde. Necessitatibus ipsa dignissimos optio excepturi voluptates reprehenderit veritatis, eum tempore aliquid nulla!',
    completed: false
  }
]

const tasksIsEmpty = !tasks.length

export function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button type="submit">Criar <PlusCircle size={16} weight="bold"/></button>
      </div>

      <div className={styles.tasksContainer}>
        <div className={styles.tasksInfo}>
          <p className={styles.createds}>Tarefas criadas <span>0</span></p>
          <p className={styles.completeds}>Concluídas <span>0 de 5</span></p>
        </div>

        <div className={tasksIsEmpty ? styles.emptyTasks : styles.tasks}>
        {tasksIsEmpty ? (
          <div className={styles.emptyTasksContent}>
            <img src={clipboard} alt="Clipboard" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        ) : (
          tasks.map(task => (
            <Task 
              key={task.id}
              id={task.id}
              description={task.description}
              completed={task.completed}
            />
          ))
        )}
      </div>
      </div>
    </main>
  )
}