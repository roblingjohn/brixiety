import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Archive from "./containers/Archive"
import About from "./containers/About"
import Socials from "./containers/Socials"
import Navbar from "./components/Navbar";
import ComicPage from "./containers/ComicPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/archive" component={Archive} />
          <Route exact path="/about" component={About} />
          <Route exact path="/socials" component={Socials} />
          <Route path="/comic/:id" component={ComicPage} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
