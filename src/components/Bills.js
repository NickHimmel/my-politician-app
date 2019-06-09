import React from 'react';
const shortid = require('shortid');

const Bills = (props) => {
  const bills = props.bills.map((bill) =>
    <tr key={shortid.generate()}>
      <td>The {bill.congress} United States Congress {bill.introduced_date}</td>
      <td>{bill.short_title}</td>
      <td>{bill.summary_short}</td>
      <td>{bill.cosponsors}</td>
      <td>D:{bill.cosponsors_by_party.D} R:{bill.cosponsors_by_party.R}</td>
      <td>{bill.latest_major_action} on {bill.latest_major_action_date}</td>
      <td>{bill.active}</td>
      <td>{bill.last_vote}</td>
      <td>{bill.house_passage}</td>
      <td>{bill.senate_passage}</td>
    </tr>
  );
  return (
    <div className="bills politician-info">
      <h3>Last Twenty Bills Sponsored</h3>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Summary</th>
            <th>Number of Cosponsors</th>
            <th>Cosponsors By Party</th>
            <th>Action</th>
            <th>Active</th>
            <th>Last Vote</th>
            <th>Passed in the House</th>
            <th>Passed in the Senate</th>
          </tr>
          {bills}
        </tbody>
      </table>
    </div>
  );
}

export default Bills;
