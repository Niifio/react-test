import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="container">
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please log in to get support</p>
      </section>

      <section className="form">
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
        <div className="register">
          <p>
            New to this website - Please register here{" "}
            <Link to="/register">
              <span className="register-link">register</span>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Login;
