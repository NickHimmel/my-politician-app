import React from 'react';
import Term from './Term.js';
const shortid = require('shortid');

const Roles = (props) => {
  const roles = props.roles.map((role) =>
    <Term term={role}  key={shortid.generate()}/>
  );
  return (
    <div id='active' className='terms politician-info'>
      <h3>Terms</h3>
      <ul className='terms-list horizontal-scroll'>
        {roles}
      </ul>
    </div>
  );
}

export default Roles;
