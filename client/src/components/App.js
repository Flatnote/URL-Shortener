import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header/Headers";
import Landing from "./landing/Landing";
import Login from "./login/Login";
import "./styles.css";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route path="/home" component={Landing} />
              <Route path="/" component={Login} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
