import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { JwtContext } from "./shared/contexts/JwtContext";
import LandingPage from "./shared/components/LandingPage/LandingPage";
import RoutesFile from "./core/Routes";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token") || null);
  const [landing, setLanding] = useState(true);

  const landingOut = () => {
    setTimeout(() => {
      setLanding(false);
    }, 2000);
  };

  useEffect(() => {
    landingOut();
  });

  return (
    <section className=".App">
      {landing && <LandingPage landingOut={landingOut} />}
      {!landing && (
        <JwtContext.Provider value={{ jwt, setJwt }}>
          <div className="App">
            <div className="App-header">
              <Router>
                <RoutesFile />
              </Router>
            </div>
          </div>
        </JwtContext.Provider>
      )}
    </section>
  );
}

export default App;
