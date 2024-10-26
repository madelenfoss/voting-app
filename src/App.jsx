import Candidates from "./components/Candidates.jsx";
import TotalVotes from "./components/TotalVotes.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Candidates />
      <TotalVotes />
      <Footer year={2024} />
    </>
  )
}

export default App;
