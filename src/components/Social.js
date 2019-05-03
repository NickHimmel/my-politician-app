import React from 'react';
import Icon from './Icon.js';

const Social = (props) => {
  return (
    <div className='social'>
      <Icon social='homepage' userName={props.url} url={props.url}/>
      <Icon social='twitter' userName={props.twitter} url={`https://www.twitter.com/${props.twitter}`}/>
      <Icon social='facebook' userName={props.facebook} url={`https://www.facebook.com/${props.facebook}`}/>
      <Icon social='youtube' userName={props.youtube} url={`https://www.youtube.com/${props.youtube}`}/>
    </div>
  );
}

export default Social;
