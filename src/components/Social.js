import React from 'react';

const Social = (props) => {
  return (
    <div>
      <p>Website: {props.url}</p>      
      <p>Facebook: {props.facebook}</p>
      <p>Twitter: {props.twitter}</p>
      <p>Youtube: {props.youtube}</p>
    </div>
  );
}

export default Social;
