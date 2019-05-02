import React from 'react';
const shortid = require('shortid');

const Contributors = (props) => {
  const contributors = props.contributors.contributor.map((contributor) =>
    <tr key={shortid.generate()}>
      <td>{contributor['@attributes'].org_name}</td>
      <td>${contributor['@attributes'].total}</td>
      <td>${contributor['@attributes'].indivs}</td>
      <td>${contributor['@attributes'].pacs}</td>
    </tr>
  );
  return (
    <div className='card contributors'>
      <h3>Top Contributors</h3>
        <table>
          <tbody>
            <tr>
              <th>Contributor</th>
              <th>Total</th>
              <th>Individuals</th>
              <th>PACs</th>
            </tr>
            {contributors}
          </tbody>
        </table>
    </div>
  );
}

export default Contributors;
