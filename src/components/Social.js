import React from 'react';

const Social = (props) => {
  console.log(props)
  return (
    <div>
      <p>Website: {props.social.url}</p>
      <p>Facebook: {props.social.facebook_account}</p>
      <p>Twitter: {props.social.twitter_account}</p>
      <p>Youtube: {props.social.youtube_account}</p>
    </div>
  );
}

export default Social;
