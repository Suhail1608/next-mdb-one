import React from 'react'
import './styles.css'
import Button from './Button/Button'
const UserCard = ({username, password,id}:{username:string, password:string,id:string}) => {
  return (
    <div className='card'>
        <div className='card-title'>{username}</div>
        <div className='card-desc'>{password}</div>
        <div className='card-buttons'>
            <Button label='Edit' buttonType = 'edit' id={id}/>
            <Button label='Delete' buttonType='pop' id={id}></Button>
        </div>
    </div>
  )
}

export default UserCard