import React from 'react';

const Social = (props) => {
  console.log(props.data)
  return (
    <div>
      <p>Facebook: {props.data.facebook_account}</p>
      <p>Twitter: {props.data.twitter_id}</p>
      <p>Youtube: {props.data.youtube_id}</p>
    </div>
  );
}

export default Social;
