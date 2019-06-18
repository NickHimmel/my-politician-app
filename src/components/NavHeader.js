import React from 'react';

const NavHeader = (props) => {
  return (
    <div className='nav'>
      <ul className='nav-header'>
        <li>
          <button onClick={(e) => props.onClick(e, props.house.id, props.house.next_election)}>
            <span>Representative</span><br/> <h3 id='header-clicked'>{props.house.name} ({props.house.party})</h3>
          </button>
        </li>
        <li>
          <button onClick={(e) => props.onClick(e, props.senatorOne.id, props.senatorOne.next_election)}>
            <span>Senator</span><br/> <h3>{props.senatorOne.name} ({props.senatorOne.party})</h3>
          </button>
        </li>
        <li>
          <button onClick={(e) => props.onClick(e, props.senatorTwo.id, props.senatorTwo.next_election)}>
            <span>Senator</span><br/> <h3>{props.senatorTwo.name} ({props.senatorTwo.party})</h3>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavHeader;
