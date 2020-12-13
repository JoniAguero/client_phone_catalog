import { map } from 'lodash';
import React from 'react'
import "./Loading.css";

const Loading = (props) => {

  const { repetitions } = props;

  return (
    <div className="container-loading">
      {map(Array(repetitions), () => (
        props.children
      ))}
    </div>
  )
}

export default Loading;
