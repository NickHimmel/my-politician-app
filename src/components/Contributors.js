import React from 'react';
const shortid = require('shortid');

const Contributors = (props) => {
  const contributors = props.contributors.contributor.map((contributor) =>
    <tr key={shortid.generate()}>
      <td>{contributor['@attributes'].org_name}</td>
      <td className='align-right'>${contributor['@attributes'].total}</td>
      <td className='align-right'>${contributor['@attributes'].indivs}</td>
      <td className='align-right'>${contributor['@attributes'].pacs}</td>
    </tr>
  );
  return (
    <div className='card contributors'>
      <h3>Top Contributors</h3>
        <table>
          <tbody>
            <tr>
              <th>Contributor</th>
              <th className='align-right'>Total</th>
              <th className='align-right'>Individuals</th>
              <th className='align-right'>PACs</th>
            </tr>
            {contributors}
          </tbody>
        </table>
        <p className='small-type'>* {props.contributors['@attributes'].notice}</p>
    </div>
  );
}

export default Contributors;
