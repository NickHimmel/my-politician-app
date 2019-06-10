import React from 'react';
const shortid = require('shortid');

const Votes = (props) => {
  const votes = props.votes.map((vote) =>
    <tr key={shortid.generate()}>
      <td>The {vote.congress} United States Congress {vote.date}</td>
      <td>{vote.bill.title} {vote.description}</td>
      <td>{vote.position}</td>
      <td>{vote.question}</td>
      <td>{vote.result}</td>
    </tr>
  );
  return (
    <div className="votes politician-info">
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>Bill</th>
            <th>Vote</th>
            <th>Question</th>
            <th>Result</th>
          </tr>
          {votes}
        </tbody>
      </table>
    </div>
  );
}

export default Votes;
