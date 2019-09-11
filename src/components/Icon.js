import React from 'react';

const Icon = (props) => {
  const imgLink = `https://s3.amazonaws.com/my-politician-app.herokuapp.com/${props.social}.png`;
  return (
    <a href={props.url} target='_blank' rel='noopener noreferrer'>
      <img className='social-icon' src={imgLink} alt={`${props.social} icon`}/>
    </a>
  );
}

export default Icon;
