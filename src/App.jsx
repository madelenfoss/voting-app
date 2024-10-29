import Candidates from "./components/Candidates.jsx";
import TotalVotes from "./components/TotalVotes.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useState, useEffect } from "react";

const App = () => {
  const [totalVotes, setTotalVotes] = useState(() => {
    const savedTotalVotes = localStorage.getItem("totalVotes");
    return savedTotalVotes !== null ? Number(savedTotalVotes) : 0;
  });

  // useEffect må til for å kunne bruke localStorage.
  // localStore oppdateres hver gang totalVotes endres
  useEffect(() => {
    localStorage.setItem("totalVotes", totalVotes);
  }, [totalVotes]);

  const increaseTotal = () => {
    setTotalVotes(totalVotes + 1);
  }

  const decreaseTotal = (votes = 1) => {
    setTotalVotes(totalVotes - votes);
  }

  return (
    <>
      <Header adjective="cutest" candidate="dog"/>
      <main className="main">
        <Candidates 
          onIncrease={increaseTotal} 
          onDecrease={decreaseTotal} />
        <TotalVotes totalVotes={totalVotes} />
      </main>
      <Footer year={2024} />
    </>
  )
}

export default App;
