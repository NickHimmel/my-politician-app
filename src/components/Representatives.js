import React from 'react';

const Representatives = (props) => {
  const representatives = props.representatives.map((representative) =>
    <li key={representative.id}><button onClick={(e) => props.onClick(e, representative.id)} id={representative.id}>{representative.name} ({representative.party})</button></li>
  );
  return (
    <div>
      <ul>
        {representatives}
      </ul>
    </div>
  );
}

export default Representatives;
