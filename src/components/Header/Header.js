import React from 'react'
import "./Header.css";
import LinkHeader from './LinkHeader';
import Search from './Search';

const CompHeader = () => {
  return (
    <div className="container-header">
      <LinkHeader />
      <Search />
    </div>
  )
}

export default CompHeader;
