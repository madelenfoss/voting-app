const VoteHistory = ({ history }) => (
   <div>
      <h3>Voting history</h3>
      <ul>
         {history.map((entry, index) => (
            <li key={index}>{entry}</li>
         ))}
      </ul>
   </div>
)

export default VoteHistory;