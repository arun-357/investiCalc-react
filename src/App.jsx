import "./index.css"
import { useState } from "react"

import Header from "./components/Header"
import User from "./components/User"
import Results from "./components/Results"

function App() {
  // States
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10
  });

  // Helpers 
  function handleChange(identifier, value) {
    setUserInput(prev => {
          return { ...prev, [identifier]: +value };
    });
  }

  return <>
    <Header />
    <User onChange={handleChange} userInput={userInput}/>
    <Results input={userInput}/>
  </>
}

export default App
