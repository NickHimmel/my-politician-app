import React from 'react';
const shortid = require('shortid');

const Bills = (props) => {
  const bills = props.bills.map((bill) =>
    <li key={shortid.generate()}>
      <p>The {bill.congress} United States Congress</p>
      <p>{bill.introduced_date}</p>
      <p>{bill.committees}</p>
      <h3>{bill.short_title}</h3>
      <p>Primary Subject: {bill.primary_subject}</p>
      <p>Bill Summary: {bill.summary_short}</p>
      <p>#Cosponsors: {bill.cosponsors}</p>
      <p>Cosponsors By Party: D:{bill.cosponsors_by_party.D} R:{bill.cosponsors_by_party.D}</p>
      <p>Last Action: {bill.latest_major_action} on {bill.latest_major_action_date}</p>
      <p>Last Vote: {bill.last_vote}</p>
      <p>Bill Active: {bill.active}</p>
      <p>Last Vote: {bill.last_vote}</p>
      <p>Passed in the House: {bill.house_passage}</p>
      <p>Passed in the Senate: {bill.senate_passage}</p>
    </li>
  );
  return (
    <div className="bills politician-info">
      <h3>Last Twenty Bills Sponsored</h3>
      <ul>
        {bills}
      </ul>
    </div>
  );
}

export default Bills;
