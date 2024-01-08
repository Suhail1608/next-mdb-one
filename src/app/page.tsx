import Image from 'next/image'
import styles from './page.module.css'
import TodoList from '@/components/TodoList/TodoList'
import TodoButton from '@/components/TodoCard/Button/Button'
import UserButton from '@/components/UserCard/Button/Button'
import UserList from '@/components/UserList/UserList'

export default function Home() {

  return (
    <div className={styles.main}>
      {/* <div className='post-button-box'>
      
      <label className='post-button-label'>Username <UserButton label='Post' buttonType='post' id=''/></label>
      </div> */}
      <div className='list-box'>
        <div className='todo-list'>
        <label className='post-button-label'>Todo <TodoButton label='Post' buttonType='post' id=''/></label>
          <TodoList/>
        </div>
        <div className='user-list'>
        <label className='post-button-label'>Username <UserButton label='Post' buttonType='post' id=''/></label>
          <UserList/>
        </div>
        
      </div>
    </div>
  )
}
