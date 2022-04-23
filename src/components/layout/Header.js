import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store";
import { Fragment } from "react";
const Header = () => {
  const state = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(authActions.logout());
  };
  const lo = (
    <button type="button" className="btn btn-primary me-3">
      <Link className="te" to="/login">
        Login
      </Link>
    </button>
  );
  const log = 
    <button type="button" className="btn btn-primary me-3" onClick={toggle}>
      Logout
    </button>
  ;
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a class="navbar-brand" href="/">
            Aditya
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active " href="/about">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Topics
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Android{" "}
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="./contact">
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
            <div class="mx-2 ">
              {state?log:lo}
              
              {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signinModal">
                    Signin
                </button> */}
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="loginModalLabel">Login to Aditya</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                          <label for="exampleInputEmail1" className="form-label">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                          <label for="exampleInputPassword1" className="form-label">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                          <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    
                </div>
            </div>
        </div>
    </div>
    
    <div className="modal fade" id="signinModal" tabindex="-1" aria-labelledby="signinModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="signinModalLabel">Get in Aditya</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                          <label for="exampleInputEmail1" className="form-label">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                          <label for="exampleInputPassword1" className="form-label">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                          <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div> */}
    </Fragment>
  );
};

export default Header;
