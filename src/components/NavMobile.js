import React from 'react';

const NavMobile = (props) => {
  const first = props.first;

  return (
    <div className='nav'>
      <div className='nav-sub nav-mobile'>
        <div className='nav-sub-item' id={first ? 'nav-mobile-active' : props.title}>
          <button className='nav-mobile-button' onClick={(e) => props.onMobile(e, props.title)}>{props.label}</button>
        </div>
      </div>
    </div>
  );
}

export default NavMobile;
