import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Navbar from "./component/Navbar";
import Newsconponent from "./component/Newsconponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = (props) => {
  const [progress, setProgress] = useState(0);
  const [modes, setMode] = useState("light");

  const toggleMode = () => {
    if (modes === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#242f4a";
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = "white";

    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);

  return (
    <Router>
      <Navbar mode={modes} togglemode={toggleMode} />{" "}
      <LoadingBar
        color={modes === "dark" ? "#000fff" : "red"}
        height={3}
        progress={progress}
      />{" "}
      <Switch>
        <Route exact path="/">
          <Newsconponent
            setProgress={setProgress}
            key="General"
            pageSize={6}
            country={"in"}
            category="General"
          />
        </Route>{" "}
        <Route exact path="/General">
          <Newsconponent
            setProgress={setProgress}
            key="General"
            pageSize={6}
            country={"in"}
            category="General"
          />
        </Route>{" "}
        <Route exact path="/Sports">
          <Newsconponent
            setProgress={setProgress}
            key="Sports"
            pageSize={6}
            country={"in"}
            category="Sports"
          />
        </Route>{" "}
        <Route exact path="/Health">
          <Newsconponent
            setProgress={setProgress}
            key="Health"
            pageSize={6}
            country={"in"}
            category="Health"
          />
        </Route>{" "}
        <Route exact path="/Business">
          <Newsconponent
            setProgress={setProgress}
            key="Business"
            pageSize={6}
            country={"in"}
            category="Business"
          />
        </Route>{" "}
        <Route exact path="/Entertainment">
          <Newsconponent
            setProgress={setProgress}
            key="Entertainment"
            pageSize={6}
            country={"in"}
            category="Entertainment"
          />
        </Route>{" "}
        <Route exact path="/Science">
          <Newsconponent
            setProgress={setProgress}
            key="Science"
            pageSize={6}
            country={"in"}
            category="Science"
          />
        </Route>{" "}
      </Switch>{" "}
    </Router>
  );
};

App.propTypes = {
  prop: PropTypes.any,
};

export default App;
