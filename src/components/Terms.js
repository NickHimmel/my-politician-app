import React from 'react';
import Elected from './Elected.js';
import Term from './Term.js';
const shortid = require('shortid');

const Terms = (props) => {
  const terms = props.terms.map((term) =>
    <Term term={term}  key={shortid.generate()}/>
  );
  return (
    <div id='active' className='terms politician-info'>
      <Elected firstElection={props.firstElection} nextElection={props.nextElection}/>
      <ul className='terms-list'>
        {terms}
      </ul>
    </div>
  );
}

export default Terms;
