import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { JwtContext } from "./shared/contexts/JwtContext";
import RoutesFile from "./core/Routes";
import UserContextProvider from "./shared/contexts/UserContext";
import { useState } from "react";

function App() {
  const [jwt, setJwt] = useState(localStorage.getItem("token") || null);

  return (
    <section className=".App">
      <JwtContext.Provider value={{ jwt, setJwt }}>
        <div className="App">
          <div className="App-header">
            <Router>
              <UserContextProvider>
                <RoutesFile />
              </UserContextProvider>
            </Router>
          </div>
        </div>
      </JwtContext.Provider>
    </section>
  );
}

export default App;
