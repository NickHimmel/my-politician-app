import React from 'react';
import Icon from './Icon.js';

const NavSub = (props) => {
  return (
    <div className='nav'>
      <ul className='nav-sub flex'>
        <li className='nav-sub-item flex flex-center' id='nav-sub-active'>
          <button className='label' onClick={(e) => props.onClick(e, 'terms')}>Terms</button>
        </li>
        <li className='nav-sub-item flex flex-center'>
          <button className='label' onClick={(e) => props.onClick(e, 'finances')}>Finances</button>
        </li>
        <li  className='nav-sub-item flex flex-center'>
          <button className='label' onClick={(e) => props.onClick(e, 'votes')}>Last 20 Votes</button>
        </li>
        <li className='nav-sub-item flex flex-center'>
          <button className='label' onClick={(e) => props.onClick(e, 'bills')}>Last 20 Bills Sponsored</button>
        </li>
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

export default NavSub;
