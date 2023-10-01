import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import CreateUser from "./components/CreateUser";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <span className="navbar-brand">React Axios Tutorial</span>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link className="nav-link" to={"/create-user"}>
                  Create User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/users"}>
                  Users List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <Routes>
            <Route exact path="/" element={<CreateUser />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
