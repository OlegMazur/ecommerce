import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../../store/hooks'
import { Path } from '../../routes/enums';
import './header.scss'
function Header() {
    const {user}=useAppSelector(state=>state.auth.user);
    const hasUser=Boolean(user)
    
  return (
    <div className='header'>
        <div>logo</div>
        <div>search</div>
        <div>contacts</div>
        {hasUser?
        <button onClick={()=><Navigate to={{ pathname: Path.LOGIN}}/>}> Вийти</button>:
        <button onClick={()=><Navigate to={{ pathname: Path.SHOP}}/>}> Увійти</button>
        
        }
    </div>
  )
}

export default Header