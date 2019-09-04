import React from 'react';
const shortid = require('shortid');

const Sectors = (props) => {
  const sectors = props.sectors.map((sector) =>
    <tr key={shortid.generate()}>
      <td>{sector['@attributes'].sector_name}</td>
      <td className='align-right'>${sector['@attributes'].total}</td>
      <td className='align-right'>${sector['@attributes'].indivs}</td>
      <td className='align-right'>${sector['@attributes'].pacs}</td>
    </tr>
  );
  return (
    <div className='card sectors'>
      <h3>Top Sectors</h3>
        <table>
          <tbody>
            <tr>
              <th>Sector</th>
              <th className='align-right'>Total</th>
              <th className='align-right'>Individuals</th>
              <th className='align-right'>PACs</th>
            </tr>
            {sectors}
          </tbody>
        </table>
    </div>
  );
}

export default Sectors;
