import { PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'

import styles from './styles.module.css'

import clipboard from '../../assets/clipboard.svg'

import { CreateTaskProps, Task } from '../Task'
import { ChangeEvent, FormEvent, useState } from 'react'

export function Main() {
  const [tasks, setTasks] = useState<CreateTaskProps[]>([])
  const [newTask, setNewTask] = useState('')

  const tasksIsEmpty = !tasks.length
  const totalOfTasks = tasks.length
  const tasksCompleted = totalOfTasks > 0 ? tasks.filter(task => task.completed === true).length : 0

  function handleCreateNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks((state) => [...state, {
      id: uuidv4(),
      description: newTask,
      completed: false
    }])
    setNewTask('')
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  function completeTask(id: string) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        const isCompleted = task.completed

        task.completed = !isCompleted
      }

      return task
    })

    setTasks(updatedTasks)
  }

  function deleteTask(id: string) {
    const tasksWihtouDeletedOne = tasks.filter(task => task.id !== id)

    setTasks(tasksWihtouDeletedOne)
  }

  return (
    <main className={styles.main}>
      <form onSubmit={handleCreateNewTask} className={styles.inputContainer}>
        <input 
          onChange={handleCreateNewTaskChange} 
          type="text" 
          placeholder="Adicione uma nova tarefa"
          onInvalid={handleNewTaskInvalid}
          value={newTask}
          required
        />
        <button type="submit">Criar <PlusCircle size={16} weight="bold"/></button>
      </form>

      <div className={styles.tasksContainer}>
        <div className={styles.tasksInfo}>
          <p className={styles.createds}>Tarefas criadas <span>{totalOfTasks}</span></p>
          <p className={styles.completeds}>Concluídas <span>{tasksCompleted} de {totalOfTasks}</span></p>
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
              onCompleteTask={completeTask}
              onDeleteTask={deleteTask}
            />
          ))
        )}
      </div>
      </div>
    </main>
  )
}