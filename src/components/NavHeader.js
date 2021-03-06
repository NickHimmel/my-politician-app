import React from 'react';

const NavHeader = (props) => {
  return (
    <div className='nav nav-desktop'>
      <ul className='nav-header'>
        <li>
          <button className='nav-header-item' onClick={(e) => props.onClick(e, props.house.id, props.house.next_election)}>
            <span className='label'>Representative</span><p id='active-button'>{props.house.name} ({props.house.party})</p>
          </button>
        </li>
        <li>
          <button className='nav-header-item' onClick={(e) => props.onClick(e, props.senatorOne.id, props.senatorOne.next_election)}>
            <span className='label'>Senator</span><p>{props.senatorOne.name} ({props.senatorOne.party})</p>
          </button>
        </li>
        <li>
          <button className='nav-header-item' onClick={(e) => props.onClick(e, props.senatorTwo.id, props.senatorTwo.next_election)}>
            <span className='label'>Senator</span><p>{props.senatorTwo.name} ({props.senatorTwo.party})</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavHeader;
