import React from 'react';

const Finances = (props) => {
  console.log(props.summary)
  return (
    <div id="active" className="finances politician-info">
      <h3>Finances</h3>
      <p>First Elected: {props.summary.first_elected}</p>
      <p>Last Updated: {props.summary.last_updated}</p>
      <p>Raised: ${props.summary.total}</p>
      <p>Spent: ${props.summary.spent}</p>
      <p>Cash on Hand: ${props.summary.cash_on_hand}</p>
      <p>Debt: ${props.summary.debt}</p>
      Top Contributors
      Top Industries
      Top Sectors
      ???????Source of Funds (Campaign Committee)????
    </div>
  )
}

export default Finances
