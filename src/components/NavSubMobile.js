import React from 'react';
import Icon from './Icon.js';

const NavSubMobile = (props) => {
  return (
    <div className='nav'>
      <ul className='nav-sub nav-sub-mobile flex-center'>
        {
          props.twitter &&
          <li className='nav-sub-item flex flex-center'><Icon social='twitter' userName={props.twitter} url={`https://www.twitter.com/${props.twitter}`}/></li>
        }
        {
          props.facebook &&
          <li className='nav-sub-item flex flex-center'><Icon social='facebook' userName={props.facebook} url={`https://www.facebook.com/${props.facebook}`}/></li>
        }
        {
          props.youtube &&
          <li className='nav-sub-item flex flex-center'><Icon social='youtube' userName={props.youtube} url={`https://www.youtube.com/${props.youtube}`}/></li>
        }
        {
          props.url &&
          <li className='nav-sub-item flex flex-center'><Icon social='homepage' userName={props.url} url={props.url}/></li>
        }
      </ul>
    </div>
  );
}

export default NavSubMobile;
