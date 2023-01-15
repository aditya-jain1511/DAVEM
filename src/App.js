import "./index.css";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import { LoginContext } from "./context/LoginContext";
import { UserContext } from "./context/UserContext";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState({})

  return (
    <BrowserRouter>
      <LoginContext.Provider value = {{login, setLogin}}>
        <UserContext.Provider value = {{user, setUser}}>
          <Pages />
        </UserContext.Provider>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
