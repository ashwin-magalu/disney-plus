import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/detail/:id" component={DetailPage} />
          <Route exact path="/" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
