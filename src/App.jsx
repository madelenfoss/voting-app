import Candidates from "./components/Candidates.jsx";
import TotalVotes from "./components/TotalVotes.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

const App = () => {
  const [totalVotes, setTotalVotes] = useState(0);

  const increaseTotal = () => {
    setTotalVotes(totalVotes + 1);
  }

  const decreaseTotal = () => {
    setTotalVotes(totalVotes - 1);
  }

  return (
    <>
      <Header />
      <main className="main">
        <Candidates onIncrease={increaseTotal} onDecrease={decreaseTotal} />
        <TotalVotes totalVotes={totalVotes} />
      </main>
      <Footer year={2024} />
    </>
  )
}

export default App;
