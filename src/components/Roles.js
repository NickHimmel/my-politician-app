import React from 'react';
import Term from './Term.js';
const shortid = require('shortid');

const Roles = (props) => {
  const roles = props.roles.map((role) =>
    <Term term={role}  key={shortid.generate()}/>
  );
  return (
    <div className="terms shown">
      <h3>Terms</h3>
      <ul>
        {roles}
      </ul>
    </div>
  );
}

export default Roles;
