import React from 'react'
import { Button } from 'semantic-ui-react';
import './AddNewPhoneButton.css';

const AddNewPhoneButton = () => {
  return (
    <div className="add-new-phone-button">
       <Button circular icon='add' className="button-add-new-phone"/>
    </div>
  )
}

export default AddNewPhoneButton
