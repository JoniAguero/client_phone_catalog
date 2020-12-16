import React from 'react'
import "./Header.css";
import LinkHeader from './LinkHeader';
import LoginButton from './LoginButton';

const CompHeader = () => {
  return (
    <div className="container-header">
      <LinkHeader />
      <LoginButton />
    </div>
  )
}

export default CompHeader;
