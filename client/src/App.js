import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import Archive from "./containers/Archive";
import About from "./containers/About";
import Socials from "./containers/Socials";
import Navbar from "./components/Navbar";
import ComicPage from "./containers/ComicPage";
import PageNotFound from "./containers/PageNotFound";
import Copyright from "./components/Copyright";
import AprilFools from "./containers/AprilFools";
import Donate from "./components/Donate";
import GhostTemplate from "./containers/GhostTemplate";
import Blog from "./containers/Blog";
import BlogPost from "./containers/BlogPost";
import BlogArchive from "./containers/BlogArchive";
import Nft from "./containers/Nft";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Donate />
        <Switch>
          <Route exact path="/archive" component={Archive} />
          <Route exact path="/about" component={About} />
          <Route exact path="/socials" component={Socials} />
          <Route exact path="/comic/:id" component={ComicPage} />
          <Route exact path="/ghosttemplate" component={GhostTemplate} />
          <Route exact path="/aprilfools" component={AprilFools} />
          <Route exact path="/nft" component={Nft} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/archive" component={BlogArchive} />
          <Route path="/blog/post/:id" component={BlogPost} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
      <Copyright />
    </div>
  );
}

export default App;
