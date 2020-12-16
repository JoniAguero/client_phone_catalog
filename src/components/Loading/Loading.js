import { map } from 'lodash';
import React from 'react'
import "./Loading.css";

const Loading = (props) => {

  const { repetitions } = props;

  return (
    <div className="container-loading">
      {map(Array(repetitions), (el, index) => (
        <div key={index}>
          {props.children}
        </div>
      ))}
    </div>
  )
}

export default Loading;
