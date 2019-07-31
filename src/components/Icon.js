import React from 'react';

const Icon = (props) => {
  const imgLink = `https://s3.amazonaws.com/my-politician-app.herokuapp.com/${props.social}.png`;
  return (
    <div className='social-icon'>
      {
        props.userName &&
         <a href={props.url} target='_blank' rel='noopener noreferrer'><img src={imgLink} alt={`${props.social} icon`}/></a>
      }
    </div>
  );
}

export default Icon;
