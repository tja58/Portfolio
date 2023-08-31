import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./store/actions/index";
import "./styles/index.css";

// Landing ( Portfolio )
import Landing from "./components/Landing";
import PortfolioTemplate from "./components/portfolio/PortfolioTemplate";

// Pets Choice
import {
  Home,
  Brands,
  Pet,
  Sales,
  Featured,
  Help,
} from "./components/Petschoice/pages";
import PetsChoiceTemplate from "./components/Petschoice/PetsChoiceTemplate";

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
          <Route exact path="/pets-choice" element={<PetsChoiceTemplate />}>
            <Route index element={<Home />} />
            <Route path="brands" element={<Brands />} />
            <Route path="pet" element={<Pet />} />
            <Route path="sales" element={<Sales />} />
            <Route path="featured" element={<Featured />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
