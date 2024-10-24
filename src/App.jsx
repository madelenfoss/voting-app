import Candidate from "./components/candidate.jsx";
import SearchCandidates from "./components/SearchCandidates.jsx";
import TotalScore from "./components/TotalScore.jsx";

const App = () => {
  return (
    <>
      <SearchCandidates />
      <Candidate />
      <TotalScore />
    </>
  )
}

export default App;
