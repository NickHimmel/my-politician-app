import React from 'react';

const Social = (props) => {
  const homepage = (url) => {
    if(url) {
      return (
        <a href={url} target='_blank' rel="noopener noreferrer"><img src='https://s3.amazonaws.com/my-politician-app.herokuapp.com/homepage.png' alt='homepage icon'/></a>
      )};
  }
  const twitter = (userName) => {
    if(userName) {
      return (
        <a href={`https://twitter.com/${userName}`} target='_blank' rel="noopener noreferrer"><img src='https://s3.amazonaws.com/my-politician-app.herokuapp.com/twitter.png' alt='twitter logo'/></a>
      )};
  }
  const facebook = (userName) => {
    if(userName) {
      return (
        <a href={`https://www.facebook.com/${userName}`} target='_blank' rel="noopener noreferrer"><img src='https://s3.amazonaws.com/my-politician-app.herokuapp.com/facebook.png' alt='facebook logo'/></a>
      )};
  }
  const youtube = (userName) => {
    if(userName) {
      return (
        <a href={`https://www.youtube.com/${userName}`} target='_blank' rel="noopener noreferrer"><img src='https://s3.amazonaws.com/my-politician-app.herokuapp.com/youtube.png' alt='youtube logo'/></a>
      )};
  }
  return (
    <div className='social'>
      {homepage(props.url)}
      {twitter(props.twitter)}
      {facebook(props.facebook)}
      {youtube(props.youtube)}
    </div>
  );
}

export default Social;
