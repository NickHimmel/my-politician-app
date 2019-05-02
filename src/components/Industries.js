import React from 'react';
const shortid = require('shortid');

const Industries = (props) => {
  const industries = props.industries.map((industry) =>
    <tr key={shortid.generate()}>
      <td>{industry['@attributes'].industry_name}</td>
      <td>${industry['@attributes'].total}</td>
      <td>${industry['@attributes'].indivs}</td>
      <td>${industry['@attributes'].pacs}</td>
    </tr>
  );
  return (
    <div className="card industries">
      <h3>Top Industries</h3>
        <table>
          <tbody>
            <tr>
              <th>Industry</th>
              <th>Total</th>
              <th>Individuals</th>
              <th>PACs</th>
            </tr>
            {industries}
          </tbody>
        </table>
    </div>
  );
}

export default Industries;
