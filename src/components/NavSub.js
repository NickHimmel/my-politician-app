import React from 'react';

const NavSub = (props) => {
  return (
    <div className="nav">
      <ul className="nav-sub">
        <li><button id="nav-sub-active" className='label-light-blue' onClick={(e) => props.onClick(e, "finances")}>Finances</button></li>
        <li><button className='label-light-blue' onClick={(e) => props.onClick(e, "terms")}>Terms</button></li>
        <li><button className='label-light-blue' onClick={(e) => props.onClick(e, "votes")}>Last 20 Votes</button></li>
        <li><button className='label-light-blue' onClick={(e) => props.onClick(e, "bills")}>Last 20 Bills Sponsored</button></li>
      </ul>
    </div>
  );
}

export default NavSub;
