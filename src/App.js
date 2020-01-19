import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import { Grid, Image } from 'semantic-ui-react'

function App() {
  return (
    <Router>
       <NavTabs  />
      <div>
        
      <br></br>
        <Route exact path="/" component={Home} />
        <br></br>
        <Route exact path="/about" component={About} />
        <br></br>
        <Route exact path="/blog" component={Blog} />
        <br></br>
        <Route path="/contact" component={Contact} />
        <br></br>
      </div>
    </Router>
  );
}

export default App;
