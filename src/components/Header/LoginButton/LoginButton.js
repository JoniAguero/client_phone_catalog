import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'
import { uiOpenModal } from '../../../redux/actions/uiActions';

const LoginButton = () => {

  const dispatch = useDispatch();
  const { auth } = useSelector( state => state )

  const handleClick = (type) => {

    switch (type) {
      case 'login':
        dispatch( uiOpenModal() );
        break;
    
      default:
        break;
    }
  }

  return (
    <>
      {
        auth.checking ? 
        <Dropdown
          direction='left'
          text="Login"
          className='icon'
          icon='user circle'
          onClick={() => handleClick('login')}
        /> :  
        <Dropdown
          direction='left'
          text="Logout"
          className='icon'
          icon='user circle'
          onClick={() => handleClick('logout')}
        />
       } 
    </>
  )
}

export default LoginButton
