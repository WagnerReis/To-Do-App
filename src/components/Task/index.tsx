import { Check, Circle, Trash } from 'phosphor-react';
import styles from './styles.module.css'

interface TaskProps {
  id: string;
  description: string;
  completed: boolean
}

export function Task({ description, completed }: TaskProps) {
  return (
    <div className={styles.task}>
      <div className={styles.taskContent}>
        <div className={styles.taskContentIcon}>
        {completed ? (
            <div className={styles.check}><Check size={16} color="#F2F2F2"/></div>
          ) : (
            <div className={styles.circle}><Circle size={24}/></div>
          )}
        </div>
        <p className={completed ? styles.taskContentTextCompleted : styles.taskContentText}>{description}</p>
      </div>
      <div className={styles.trash}>
        <Trash size={24}  />
      </div>
    </div>
  )
}