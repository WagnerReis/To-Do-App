import { Check, Circle, Trash } from 'phosphor-react';
import styles from './styles.module.css'

export interface TaskProps {
  id: string;
  description: string;
  completed: boolean;
  onCompleteTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export type CreateTaskProps = Omit<TaskProps, 'onCompleteTask' | 'onDeleteTask'>

export function Task({ 
  id, 
  description, 
  completed, 
  onCompleteTask, 
  onDeleteTask 
}: TaskProps) {
  function handleCompleteTask() {
    onCompleteTask(id)
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskContent}>
        <div className={styles.taskContentIcon}>
        {completed ? (
            <div onClick={handleCompleteTask} className={styles.check}><Check size={16} color="#F2F2F2"/></div>
          ) : (
            <div onClick={handleCompleteTask} className={styles.circle}><Circle size={24}/></div>
          )}
        </div>
        <p className={completed ? styles.taskContentTextCompleted : styles.taskContentText}>{description}</p>
      </div>
      <div onClick={() => onDeleteTask(id)} className={styles.trash}>
        <Trash  />
      </div>
    </div>
  )
}