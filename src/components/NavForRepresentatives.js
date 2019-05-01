import React from 'react';

const NavForRepresentatives = (props) => {
  const senatorOne = props.senate[0];
  const senatorTwo = props.senate[1];
  return (
    <div className="nav">
      <ul>
        <li><button onClick={(e) => props.onClick(e, props.house.id, props.house.nextElection)}>{props.house.title} {props.house.name} ({props.house.party})</button></li>
        <li><button onClick={(e) => props.onClick(e, senatorOne.id, senatorOne.nextElection)}>{senatorOne.title} {senatorOne.name} ({senatorOne.party})</button></li>
        <li><button onClick={(e) => props.onClick(e, senatorTwo.id, senatorTwo.nextElection)}>{senatorTwo.title} {senatorTwo.name} ({senatorTwo.party})</button></li>
      </ul>
    </div>
  );
}

export default NavForRepresentatives;
