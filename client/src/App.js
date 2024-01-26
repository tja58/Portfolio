import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./store/actions/index";
import "./styles";

// Landing ( Portfolio )
import Landing from "./Portfolio/pages/Landing";

// DBS imports
import DBSHeader from "./DBS/components/Header";
import DBSFooter from "./DBS/components/Footer";
import "./DBS/styles/Pages/index";
import "./DBS/styles/components/index";
import "./DBS/styles/index.css";

import { renderPages, renderAuthPages } from "./DBS/utils/RenderPages";

const PortfolioTemplate = () => {
  return (
    <>
      <DBSHeader />
      <Outlet />
      <DBSFooter />
    </>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* Portfolio */}
          <Route path="/" element={<Landing />} />
          {/* DBS Pages*/}
          <Route exact path="/dbs" element={<PortfolioTemplate />}>
            {renderPages()} {renderAuthPages()}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
