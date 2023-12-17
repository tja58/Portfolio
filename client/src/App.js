import React, { Component } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./store/actions/index";
import "./styles";

// Landing ( Portfolio )
import Landing from "./Portfolio/pages/Landing";

// DBS imports
import { pages, authPages } from "./DBS/pages";
import ProtectedRoute from "./DBS/store/utils/ProtectedRoute";
import DBSHeader from "./DBS/components/Header";
import DBSFooter from "./DBS/components/Footer";
import "./DBS/styles/Pages/index";
import "./DBS/styles/components/index";
import "./DBS/styles/index.css";

// DBS pages
function DBSPages() {
  return pages.map((element) => {
    return (
      <Route
        path={element.path}
        Component={element.component}
        key={element.path}
      />
    );
  });
}
function DBSAuthPages(props) {
  return authPages.map((element) => {
    return (
      <Route
        path={element.path}
        element={<ProtectedRoute />}
        key={element.path}
      >
        <Route exact path={element.path} Component={element.component} />
      </Route>
    );
  });
}
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
            {DBSPages()} {DBSAuthPages()}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
