import "./App.css";
import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkillsGrid from "./components/SkillsGrid";
import { useState, useEffect } from "react";
import YourStack from "./components/YourStack";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [skills, setSkills] = useState([]);
  const [stack, setStack] = useState([]);

  useEffect(() => {
    fetch("skills.json")
      .then((fetchedData) => fetchedData.json())
      .then((lastSkills) => setSkills(lastSkills));
  }, []);

  function toggleStack(skillId) {
    setStack((prevStack) =>
      prevStack.includes(skillId)
        ? prevStack.filter((id) => id !== skillId)
        : [...prevStack, skillId]
    );
  }

  return (
    <div className="App">
      <div className="container">
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Oleg Skills</Link>
              </li>
              <li>
                <Link to="/stack">Your Stack</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <SkillsGrid
                  skills={skills}
                  stack={stack}
                  toggleStack={toggleStack}
                />
              }
            ></Route>
            <Route
              path="/stack"
              element={
                <YourStack
                  skills={skills}
                  stack={stack}
                  toggleStack={toggleStack}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
