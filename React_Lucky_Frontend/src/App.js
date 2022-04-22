import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { IsLoggedContext } from "./shared/contexts/IsLoggedContext";
import { getCookieUtil } from "./shared/utils/getCookieUtil";
import RoutesFile from "./core/Routes";
import LandingPage from "./shared/components/LandingPage/LandingPage";

function App() {
  console.log(getCookieUtil("token"));
  const [isLogged, setIsLogged] = useState(!!getCookieUtil("token"));
  const [landing, setLanding] = useState(true);

  const landingOut = () => {
    setTimeout(() => {
      setLanding(false);
    }, 10);
  };

  useEffect(() => {
    landingOut();
  });

  return (
    <section className=".App">
      {landing && <LandingPage landingOut={landingOut} />}
      {!landing && (
        <IsLoggedContext.Provider value={{ isLogged, setIsLogged }}>
          <div className="App">
            <div className="App-header">
              <Router>
                <RoutesFile />
              </Router>
            </div>
          </div>
        </IsLoggedContext.Provider>
      )}
    </section>
  );
}

export default App;
