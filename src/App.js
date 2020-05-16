import React from "react";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
      </Router>
    </>
  );
}
