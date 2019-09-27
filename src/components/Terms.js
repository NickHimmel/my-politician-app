import React from 'react';
import Elected from './Elected.js';
import Term from './Term.js';
const shortid = require('shortid');

const Terms = (props) => {
  const terms = props.terms.map((term, index) => {
      let first = false;
      if (index === 0) first = true;

      return <Term term={term}  key={shortid.generate()} first={first}/>
    }
  );
  return (
    <div id='active' className='terms politician-info'>
      <h3 className='nav-mobile-headers'>Terms</h3>
      <Elected firstElection={props.firstElection} nextElection={props.nextElection}/>
      <ul className='terms-list'>
        {terms}
      </ul>
    </div>
  );
}

export default Terms;
