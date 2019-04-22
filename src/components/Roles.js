import React from 'react';
import Term from './Term.js';

const Roles = (props) => {
  const roles = props.roles.map((role) =>
    <Term term={role}  key={role.congress}/>
  );
  return (
    <div>
      <h3>Terms</h3>
      <ul>
        {roles}
      </ul>
    </div>
  );
}

export default Roles;
