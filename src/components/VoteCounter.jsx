import { useState, useEffect } from "react";

const VoteCounter = ({ candidateId, onIncrease, onDecrease }) => {
  const [voteCount, setVoteCount] = useState(() => {
    const savedVotes = localStorage.getItem(`votes_${candidateId}`);
    return savedVotes !== null ? Number(savedVotes) : 0;
  });

  // useEffect for å kunne lagre stemmer i localStorage som
  // oppdateres hver gang voteCount endres
  useEffect(() => {
    localStorage.setItem(`votes_${candidateId}`, voteCount);
  }, [voteCount, candidateId]);

  const increaseVotes = () => {
    setVoteCount((prevCount) => prevCount + 1);
    onIncrease();
  };

  const decreaseVotes = () => {
    // Sørger for at poengsummen ikke blir mindre enn null
    if (voteCount > 0) {
      setVoteCount(voteCount - 1);
      onDecrease();
    }
  };

  return (
    <div>
      <h2>Votes: {voteCount}</h2>
      <div className="vote_buttons">
        <button 
          className="yes_button"
          onClick={increaseVotes}>
          Yes
        </button>
        <button 
          className="no_button"
          onClick={decreaseVotes}>
          No
        </button>
      </div>
    </div>
  )
}

export default VoteCounter;
