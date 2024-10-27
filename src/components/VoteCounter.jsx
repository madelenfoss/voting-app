import { useState } from "react";

const VoteCounter = ({ onIncrease, onDecrease }) => {
  const [voteCount, setVoteCount] = useState(0);

  const increaseVotes = () => {
    setVoteCount(voteCount + 1);
    onIncrease();
  };

  const decreaseVotes = () => {
    setVoteCount(voteCount -1);
    onDecrease();
  };

  return (
    <div>
      <h2>Votes: {voteCount}</h2>
      <button onClick={decreaseVotes}>No</button>
      <button onClick={increaseVotes}>Yes</button>
    </div>
  )
}

export default VoteCounter;
