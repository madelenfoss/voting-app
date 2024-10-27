import VoteCounter from "./VoteCounter.jsx";
import { useEffect, useState } from "react";

const Candidates = () => {
  // useState her
  const [candidates, setCandidates] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addCandidate();
  }

  // For å lagre kandidatene slik at de ikke forsvinner når
  // du oppdaterer siden
  useEffect(() => {
    const savedCandidates = localStorage.getItem("candidates");
    if (savedCandidates) {
      setCandidates(JSON.parse(savedCandidates));
    }
  }, []);

  // Funksjon som konverterer bilde til base64
  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject)=> {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Oppdaterer kandidatliste og lagrer i localstorage
  const addCandidate = async () => {
    // Passer på at både navn og bilde er fylt inn
    if (name && image) {
      try {

        // Konverterer bildet til base64-string
        const imageBase64 = await convertImageToBase64(image);

        const newCandidate = {
          id: Date.now(),
          name: name,
          image: imageBase64
        };
  
        const updatedCandidates = [newCandidate, ...candidates];
        // Legger inn ny kandidat i array
        setCandidates(updatedCandidates);
        localStorage.setItem("candidates", JSON.stringify(updatedCandidates));
        
        // Tilbakestiller navn
        setName("");
        // Tilbakestiller bilde
        setImage(null);
        // Tilbakestiller feilmelding
        setErrorMessage("");

      } catch (error) {
        console.log("Error converting image to base64:", error);
      }
    } else {
      setErrorMessage("Please enter a name and upload a photo")
    }
  };

  const deleteCandidate = (id) => {
    const updatedCandidates = candidates.filter((candidate) => candidate.id !== id);
    setCandidates(updatedCandidates);
    localStorage.setItem("candidates", JSON.stringify(updatedCandidates));
  };

  return (
    <>
      <div className="add-search">
        <form className="addbar" onSubmit={handleSubmit}>
          <div className="candidate_name-input">
            <label htmlFor="candidate">Candidate name</label>
            <input 
              id="candidate"
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="candidate_image-input">
            <label htmlFor="image">Upload image</label>
            <input 
              id="image"
              type="file" 
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button onClick={addCandidate} className="candidate_add-btn">
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
      {errorMessage && (
        <div className="error">{errorMessage}</div>
      )}

      <ul className="candidate_ul">
        {candidates.map((candidate) => (
          <li key={candidate.id} className="candidate_li">
            <div className="candidate_info">
              <h2 className="candidate_name">{candidate.name}</h2>
              <img 
                src={candidate.image} 
                className="candidate_image"
                alt={candidate.name}/>
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
