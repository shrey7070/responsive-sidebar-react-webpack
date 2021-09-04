import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
        {/* <Switch>
          <Route exact path="/about" component={About} />
          <Route path="/movies" component={Home} />
          <Route path="/tvshows" component={Home} />
          <Route exact path="/" component={Home} />
          <Redirect from="*" to="/" />
        </Switch> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
