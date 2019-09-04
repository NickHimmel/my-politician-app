import React from 'react';
const shortid = require('shortid');

const Industries = (props) => {
  const industries = props.industries.map((industry) =>
    <tr key={shortid.generate()}>
      <td>{industry['@attributes'].industry_name}</td>
      <td className='align-right'>${industry['@attributes'].total}</td>
      <td className='align-right'>${industry['@attributes'].indivs}</td>
      <td className='align-right'>${industry['@attributes'].pacs}</td>
    </tr>
  );
  return (
    <div className='card industries'>
      <h3>Top Industries</h3>
        <table>
          <tbody>
            <tr>
              <th>Industry</th>
              <th className='align-right'>Total</th>
              <th className='align-right'>Individuals</th>
              <th className='align-right'>PACs</th>
            </tr>
            {industries}
          </tbody>
        </table>
    </div>
  );
}

export default Industries;
