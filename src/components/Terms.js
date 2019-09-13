import React from 'react';
import Term from './Term.js';
const shortid = require('shortid');

const Terms = (props) => {
  const roles = props.roles.map((role) =>
    <Term term={role}  key={shortid.generate()}/>
  );
  return (
    <div id='active' className='terms politician-info'>
      <ul className='terms-list'>
        {roles}
      </ul>
    </div>
  );
}

export default Terms;
