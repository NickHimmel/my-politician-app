import React from 'react';
const shortid = require('shortid');

const Contributors = (props) => {
  console.log(props)
  const contributors = props.contributors.contributor.map((contributor) =>
    <tr key={shortid.generate()}>
      <td>{contributor['@attributes'].org_name}</td>
      <td>${contributor['@attributes'].total}</td>
      <td>${contributor['@attributes'].indivs}</td>
      <td>${contributor['@attributes'].pacs}</td>
      <td>${contributor['@attributes'].notice}</td>
    </tr>
  );
  return (
    <div className="contributors">
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
        <p>*{props.contributors['@attributes'].notice}</p>
    </div>
  );
}

export default Contributors;
