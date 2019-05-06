import React from 'react';

const NavForPolitician = (props) => {
  return (
    <div className="nav">
      <ul>
        <li><button id="tab" onClick={(e) => props.onClick(e, "finances")}>Finances</button></li>
        <li><button onClick={(e) => props.onClick(e, "terms")}>Terms</button></li>
        <li><button onClick={(e) => props.onClick(e, "votes")}>Last 20 Votes</button></li>
        <li><button onClick={(e) => props.onClick(e, "bills")}>Last 20 Bills Sponsored</button></li>
      </ul>
    </div>
  );
}

export default NavForPolitician;
