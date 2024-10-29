const VoteHistory = ({ history }) => (
   <div title="Scroll to see more" className="voting_history">
      <h3 className="voting_history-title">Voting history</h3>
      <ul className="voting_history-ul">
         {history.map((entry, index) => (
            <li className="voting_history-li" key={index}>{entry}</li>
         ))}
      </ul>
   </div>
);

export default VoteHistory;