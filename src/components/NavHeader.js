import React from 'react';

const NavHeader = (props) => {
  const senatorOne = props.senate[0];
  const senatorTwo = props.senate[1];
  return (
    <div className='nav'>
      <ul>
        <li><button id='representative' onClick={(e) => props.onClick(e, props.house.id, props.house.nextElection)}>Representative {props.house.name} ({props.house.party})</button></li>
        <li><button onClick={(e) => props.onClick(e, senatorOne.id, senatorOne.nextElection)}>Senator {senatorOne.name} ({senatorOne.party})</button></li>
        <li><button onClick={(e) => props.onClick(e, senatorTwo.id, senatorTwo.nextElection)}>Senator {senatorTwo.name} ({senatorTwo.party})</button></li>
      </ul>
    </div>
  );
}

export default NavHeader;
