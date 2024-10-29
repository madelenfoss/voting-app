import Candidates from "./components/Candidates.jsx";
import TotalVotes from "./components/TotalVotes.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useState, useEffect } from "react";
import VoteHistory from "./components/VoteHistory.jsx";

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

  // Tilstand for stemmegivningshistorikk med bruk av localStorage
  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem("voteHistory");
    return savedHistory ? JSON.parse(savedHistory) : [];
  });

  const addHistoryEntry = (candidateName, action) => {
    // Lager timestampvariabel som gir dato og tid i norsk format
    const timestamp = new Date().toLocaleString("no-NO");
    // Ny stemmegivning med ternary operator. Hvis action er en økning i stemmer
    // vil teksten være "recieved", ellers vil teksten være "lost"
    const newEntry = `${candidateName} ${action === "increase" ? "recieved" : "lost"} a vote ${timestamp}`;

    // Legger til ny historikk i oppdatert history array
    const updatedHistory = [newEntry, ...history];
    setHistory(updatedHistory);
    localStorage.setItem("voteHistory", JSON.stringify(updatedHistory));
  };

  return (
    <>
      <Header adjective="cutest" candidate="dog"/>
      <main className="main">
        <Candidates 
          onIncrease={increaseTotal} 
          onDecrease={decreaseTotal}
          addHistoryEntry={addHistoryEntry}
        />
        <TotalVotes totalVotes={totalVotes} />
        <VoteHistory history={history}/>
      </main>
      <Footer year={2024} />
    </>
  )
}

export default App;
