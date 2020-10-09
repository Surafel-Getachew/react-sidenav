import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";
import Layout from "./components/Layout/Layout";
const App = () => {
  return (
    <Router>
      {/* <Sidebar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/layout" component={Layout} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contacts} />
      </Switch>
    </Router>
  );
};

export default App;
