import React from 'react';

const NavMobile = (props) => {
  return (
    <div className='nav'>
      <div className='nav-mobile'>
        <button id='mobile-button' className='nav-mobile-button' onClick={(e) => props.onClick(e)}>&#709;</button>
        <div id='nav-label' className='nav-header'>
          <div className='nav-mobile-label'>
            <span id='nav-label-title' className='label'>Representative</span>
            <p id='nav-label-name'>{props.house.name} ({props.house.party})</p>
          </div>
        </div>
        <div id='nav-menu'>
          <ul className='nav-header'>
            <li>
              <button className='nav-header-item' onClick={(e) => props.onClick(e, 'Representative', props.house.name, props.house.party, props.house.id, props.house.next_election)}>
                <span className='label'>Representative</span><p>{props.house.name} ({props.house.party})</p>
              </button>
            </li>
            <li>
              <button className='nav-header-item' onClick={(e) => props.onClick(e, 'Senator', props.senatorOne.name, props.senatorOne.party, props.senatorOne.id, props.senatorOne.next_election)}>
                <span className='label'>Senator</span><p>{props.senatorOne.name} ({props.senatorOne.party})</p>
              </button>
            </li>
            <li>
              <button className='nav-header-item' onClick={(e) => props.onClick(e, 'Senator', props.senatorTwo.name, props.senatorTwo.party,  props.senatorTwo.id, props.senatorTwo.next_election)}>
                <span className='label'>Senator</span><p>{props.senatorTwo.name} ({props.senatorTwo.party})</p>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavMobile;
