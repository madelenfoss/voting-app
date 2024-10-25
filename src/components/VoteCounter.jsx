import { useState } from "react";

const VoteCounter = () => {
  const [voteCount, setVoteCount] = useState(0);

  const increaseVotes = () => {
    setVoteCount(voteCount + 1);
  };

  const decreaseVotes = () => {
    setVoteCount(voteCount -1);
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
