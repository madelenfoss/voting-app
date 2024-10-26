import VoteCounter from "./VoteCounter.jsx";
import { useState } from "react";

const Candidates = () => {
  // useState her
  const [candidates, setCandidates] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    addCandidate();
  }

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
      <div className="add-search">
        <form className="addbar" onSubmit={handleSubmit}>
          <label htmlFor="candidate_name">Candidate name</label>
          <input 
            id="candidate_name"
            type="text" 
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
          <button onClick={addCandidate}>
            Add candidate
          </button>
        </form>


        <form className="searchbar">
          <label htmlFor="search"></label>
          <input 
            id="search" 
            type="search"
            placeholder="Search..."
          />
          <button>Search</button>
        </form>
      </div>

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
