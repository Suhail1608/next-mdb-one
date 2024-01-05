import React from 'react'
import './styles.css'
import Button from './Button/Button'
const TodoCard = ({title, desc,id}:{title:string, desc:string,id:string}) => {
  return (
    <div className='card'>
        <div className='card-title'>{title}</div>
        <div className='card-desc'>{desc}</div>
        <div className='card-buttons'>
            <Button label='Edit' buttonType = 'edit' id={id}/>
            <Button label='Delete' buttonType='pop' id={id}></Button>
        </div>
    </div>
  )
}

export default TodoCard