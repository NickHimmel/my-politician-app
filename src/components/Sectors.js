import React from 'react';
const shortid = require('shortid');

const Sectors = (props) => {
  const sectors = props.sectors.map((sector) =>
    <tr key={shortid.generate()}>
      <td>{sector['@attributes'].sector_name}</td>
      <td>${sector['@attributes'].total}</td>
      <td>${sector['@attributes'].indivs}</td>
      <td>${sector['@attributes'].pacs}</td>
    </tr>
  );
  return (
    <div className='card sectors'>
      <h3>Top Sectors</h3>
        <table>
          <tbody>
            <tr>
              <th>Sector</th>
              <th>Total</th>
              <th>Individuals</th>
              <th>PACs</th>
            </tr>
            {sectors}
          </tbody>
        </table>
    </div>
  );
}

export default Sectors;
