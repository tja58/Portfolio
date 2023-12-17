import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Header = (props) => {
  const location = useLocation();

  return <Headercontent location={location} {...props} />;
};

class Headercontent extends Component {
  renderContent() {
    let headerLink = null;
    let headerTitle = null;
    if (this.props.auth) {
      headerLink = "/dbs/dashboard";
      headerTitle = "Dashboard";
    } else {
      if (this.props.location.pathname === "/dbs/login") {
        headerLink = "/dbs/signup";
        headerTitle = "Sign Up";
      } else {
        headerLink = "/dbs/login";
        headerTitle = "Login";
      }
    }
    return <Link to={headerLink}>{headerTitle}</Link>;
  }

  toggleDropdown() {
    const dpd = document.getElementById("header-dropdown");
    dpd.classList.toggle("show-header-drop");
  }

  render() {
    return (
      <div className="header">
        <div className="header-title">Dynamic Business Sync</div>
        <div className="header-links">
          <Link to="/dbs">Home</Link>
          <Link to="/dbs/features">Features</Link>
          <Link to="/dbs/pricing">Pricing</Link>
          <a href="https://github.com/atk21009/Senior-Project/releases/download/v1.0.3/ElectronReact.Setup.4.6.0.exe">
            Download
          </a>
          <Link to="/dbs/support">Support</Link>
          <div className="header-auth">{this.renderContent()}</div>
        </div>

        <div className="Menu">
          <i
            class="fa-solid fa-bars dropdown-btn"
            onClick={this.toggleDropdown}
          ></i>
          <div className="dropdown-header-links" id="header-dropdown">
            <Link to="/dbs" onClick={this.toggleDropdown}>
              Home
            </Link>
            <Link to="/dbs/features" onClick={this.toggleDropdown}>
              Features
            </Link>
            <Link to="/dbs/pricing" onClick={this.toggleDropdown}>
              Pricing
            </Link>
            <a
              onClick={this.toggleDropdown}
              href="https://github.com/atk21009/Senior-Project/releases/download/v1.0.0/ElectronReact.Setup.4.6.0.exe"
            >
              Download
            </a>
            <Link to="/dbs/support" onClick={this.toggleDropdown}>
              Support
            </Link>
            <div className="header-auth" onClick={this.toggleDropdown}>
              {this.renderContent()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
