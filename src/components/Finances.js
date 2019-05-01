import React from 'react';
import Contributors from './Contributors.js';
import Industries from './Industries.js';
import Sectors from './Sectors.js';

const Finances = (props) => {
  if (props.cid) {
    return (
      <div id="active" className="finances politician-info">
        <h3>Finances</h3>
        <p>First Elected: {props.summary.first_elected}</p>
        <p>Last Updated: {props.summary.last_updated}</p>
        <p>Raised: ${props.summary.total}</p>
        <p>Spent: ${props.summary.spent}</p>
        <p>Cash on Hand: ${props.summary.cash_on_hand}</p>
        <p>Debt: ${props.summary.debt}</p>
        <Contributors contributors={props.contributors}/>
        <Industries industries={props.industries} />
        <Sectors sectors={props.sectors}/>
        ???????Source of Funds (Campaign Committee)????
      </div>
    )} else {
      return (
        <p>Votesmart id = {props.votesmart}</p>
      )
    }
}

export default Finances
