import Candidate from "./components/candidate.jsx";
import SearchCandidates from "./components/SearchCandidates.jsx";
import TotalScore from "./components/TotalScore.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <SearchCandidates />
      <Candidate />
      <TotalScore />
      <Footer year={2024} />
    </>
  )
}

export default App;
