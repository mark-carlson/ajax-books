import React from "react";
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">
        React Reading List
      </Link>
    </div>
    <div className="nav navbar-nav navbar-right text-white">Total Likes: 0</div>
    </div>
    </nav>
  );
}

export default Nav;
