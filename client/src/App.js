import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./store/actions/index";
import "./styles";

// Landing ( Portfolio )
import Landing from "./Portfolio/pages/Landing";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* Portfolio */}
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
