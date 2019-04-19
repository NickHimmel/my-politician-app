import React from 'react';
import Term from './Term.js';

const Roles = (props) => {
  const roles = props.roles.map((role) =>
    <div>
      <h3>Terms</h3>
      <ul>
        <Term term={role}  key={role.congress}/>
      </ul>
    </div>
  );
  return (
    <div>
      {roles}
    </div>
  );
}

export default Roles;
