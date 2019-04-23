import React from 'react';
import Title from './Title.js';
import Social from './Social.js';

const Politician = (props) => {
  console.log(props.politician)
  return (
    <div>
      <Title name={props.politician.name} party={props.politician.party} nextElection={props.politician.next_election} />
      <Social facebook={props.politician.facebook_account} twitter={props.politician.twitter_id} youtube={props.politician.youtube_id} />
    </div>
  );
}

export default Politician;
