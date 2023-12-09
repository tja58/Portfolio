import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./store/actions/index";
import "./styles";

// Landing ( Portfolio )
import Landing from "./pages/Landing";
import PortfolioTemplate from "./Templates/PortfolioTemplate";

// Pets Choice
import petsChoice from "./pages/PetsChoice";
import PetsChoiceTemplate from "./Templates/PetsChoiceTemplate";

function renderPages(element) {
  return element.map((e) => {
    return e.href && e.href ? (
      <Route key={e.href} path={e.href} element={<e.page />} />
    ) : (
      <Route key={e.href} index element={<e.page />} />
    );
  });
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* Portfolio */}
          <Route exact path="/" element={<PortfolioTemplate />}>
            <Route index element={<Landing />} />
          </Route>
          {/* Pets Choice */}
          <Route path="/pets-choice" element={<PetsChoiceTemplate />}>
            {renderPages(petsChoice)}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
