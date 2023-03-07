import React, { useState, lazy, Suspense } from "react";
import { FaUser } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerUser } from "../redux/features/authSlice";
import registerbg from "../images/registerbg.mp4";
import { toast } from "react-toastify";
const RegisterVideo = lazy(() => import("../components/RegisterVideo"));
function Register() {
  const { users } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = userData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChange = (e) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      password2,
    };
    if (password !== password2) {
      toast("passwords do no match");
    }

    const userExist = users.find((mail) => mail.email === user.email);
    if (userExist) {
      toast("User already exist. Please register");
      navigate("/");
      return;
    }
    dispatch(registerUser(user));
    navigate("/");
  };
  return (
    <div className="app-container">
      <div className="container">
        <section className="heading">
          <h1>
            <FaUser /> Register
          </h1>
          <p>Please create an account</p>
        </section>

        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                onChange={onChange}
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
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group eye-container">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password2"
                name="password2"
                placeholder="Confirm password"
                onChange={onChange}
                required
              />
              <span
                className="eye"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <AiFillEye />
              </span>
            </div>
            <div className="form-group">
              <button className="btn btn-block">Submit</button>
            </div>
          </form>
          <div className="register">
            <p>
              Already a user - Please login here
              <Link to="/">
                <span className="register-link">login</span>
              </Link>
            </p>
          </div>
        </section>
      </div>
      <div className="video-container">
        <Suspense fallback={<div>Loading...</div>}>
          <RegisterVideo />
        </Suspense>
      </div>
    </div>
  );
}

export default Register;
