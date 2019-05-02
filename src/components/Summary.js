import React from 'react';

const Summary = (props) => {
  return (
    <div className="card summary">
      <h3>Summary</h3>
      <p>Source: {props.summary.origin}</p>
      <p>First Elected: {props.summary.first_elected}</p>
      <p>Last Updated: {props.summary.last_updated}</p>
      <p>Raised: ${props.summary.total}</p>
      <p>Spent: ${props.summary.spent}</p>
      <p>Cash on Hand: ${props.summary.cash_on_hand}</p>
      <p>Debt: ${props.summary.debt}</p>
    </div>
  );
}

export default Summary;
