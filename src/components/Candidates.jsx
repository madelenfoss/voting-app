import VoteCounter from "./VoteCounter.jsx";

import { useState } from "react";

const Candidates = () => {
  // useState her
  const [candidates, setCandidates] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const addCandidate = () => {
    // Passer på at både navn og bilde er fylt inn
    if (name && image) {
      const newCandidate = {
        id: Date.now(),
        name: name,
        image: URL.createObjectURL(image)
      };

      // Legger inn ny kandidat i array
      setCandidates([newCandidate, ...candidates]);
      // Tilbakestiller navn
      setName("");
      // Tilbakestiller bilde
      setImage(null)
    }
  };

  const deleteCandidate = (id) => {
    setCandidates(candidates.filter((candidate) => candidate.id !== id))
  };

  return (
    <>
      <form action="">
        <label htmlFor="candidate_name">Candidate name</label>
        <input 
          id="candidate_name"
          type="text" 
          placeholder="Enter candidate's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="candidate-image">Upload image</label>
        <input 
          id="candidate-image"
          type="file" 
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </form>

      <button onClick={addCandidate}>
        Add candidate
      </button>

      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id} className="candidate">
            <div className="candidate-info">
              <h2>{candidate.name}</h2>
              <img src={candidate.image} alt={candidate.name}/>
            </div>
            <VoteCounter />
            <button onClick={() => deleteCandidate(candidate.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Candidates;
