import { useState, lazy, Suspense } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/features/authSlice";
import { AiFillEye } from "react-icons/ai";

const VideoComponent = lazy(() => import("../components/Video"));

function Login() {
  const { users } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { email, password, name } = userData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    const userExist = users.find((mail) => mail.email === user.email);
    if (userExist && userExist.password === user.password) {
      navigate("/home/user");
    } else {
      toast("Incorrect password or user doesn't exist. Register");
    }
    dispatch(loginUser(user));
  };
  return (
    <div className="app-container">
      <div className="container">
        <section className="heading">
          <h1>
            <FaSignInAlt /> Login
          </h1>
          <p>Please log in to get support</p>
        </section>
        <section className="form">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="name"
                className="form-control"
                id="name"
                name="name"
                onChange={onChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={onChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group eye-container">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                name="password"
                onChange={onChange}
                placeholder="Enter password"
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
              <button type="submit" className="btn btn-block">
                Submit
              </button>
            </div>
          </form>
          <div className="register">
            <p>
              New to this website - Please register here
              <Link to="/register">
                <span className="register-link">register</span>
              </Link>
            </p>
          </div>
        </section>
      </div>
      <div className="video-container">
        <Suspense fallback={<div>Loading...</div>}>
          <VideoComponent />
        </Suspense>
      </div>
    </div>
  );
}

export default Login;
