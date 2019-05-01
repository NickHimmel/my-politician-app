import React from 'react';

const NavForRepresentatives = (props) => {
  const representatives = props.representatives.map((representative) =>
    <li key={representative.id}><button onClick={(e) => props.onClick(e, representative.id, representative.nextElection)}>{representative.title} {representative.name} ({representative.party})</button></li>
  );
  return (
    <div>
      <ul>
        {representatives}
      </ul>
    </div>
  );
}

export default NavForRepresentatives;
