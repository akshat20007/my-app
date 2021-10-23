import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [newstate, setNewstate] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode was enabled", "success");
      document.title = "Text Utils-Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode was enabled", "success");
      document.title = "Text Utils-Light Mode";
    }
  };
  const toggleNewMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#02240a";
      showAlert("Green mode was enabled", "success");
      console.log("new toggle");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode was enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Text"
          mode={mode}
          toggleMode={toggleMode}
          toggleNewMode={toggleNewMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About
                mode={mode}
                toggleMode={toggleMode}
                toggleNewMode={toggleNewMode}
              />
            </Route>

            <Route path="/">
              <TextForm
                heading="Enter your text"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
