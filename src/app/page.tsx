import Image from 'next/image'
import styles from './page.module.css'
import TodoList from '@/components/TodoList/TodoList'
import Button from '@/components/TodoCard/Button/Button'

export default function Home() {

  return (
    <div className={styles.main}>
      <div>Home <Button label='Post' buttonType='post' id=''/></div>
      <TodoList/>
    </div>
  )
}
