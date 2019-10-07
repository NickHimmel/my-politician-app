import React from 'react';

const Cash = (props) => {
  return (
    <div className='card cash'>
      <table>
        <tbody>
          <tr>
            <th>Cash</th>
            <th className='align-right'>Total</th>
          </tr>
          <tr>
            <td>Raised</td>
            <td className='align-right'>${props.summary.total}</td>
          </tr>
          <tr>
            <td>Spent</td>
            <td className='align-right'>${props.summary.spent}</td>
          </tr>
          <tr>
            <td>On Hand</td>
            <td className='align-right'>${props.summary.cash_on_hand}</td>
          </tr>
          <tr>
            <td>Debt</td>
            <td className='align-right'>${props.summary.debt}</td>
          </tr>
        </tbody>
      </table>
      <p className='small-type'>From the {props.summary.origin}. Last updated on {props.summary.last_updated}</p>
    </div>
  );
}

export default Cash;
