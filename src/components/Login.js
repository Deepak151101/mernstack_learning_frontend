import React, { useState , useContext } from "react";
import loginPic from "../Images/loginImg.png";
import { NavLink, useNavigate } from "react-router-dom";

import { UserContext } from "../App";

const Login = () => {

  const {dispatch} = useContext(UserContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [data, setData] = useState({ email: "", password: "" });

  const loginUser = async (e) => {
    e.preventDefault(); // To prevent form getting reload by default

    const res = await fetch("/signin", {
      method: "POST",
      credentials: "include", // To store cookies
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // When we send data to server it does not understand JSON, so we convert it to string
        email,
        password,
      }),
    });

    const Data = await res.json();
    console.log(Data);

    if (res.status === 200 && Data.success) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({type: "USER" , payload: true}) // Payload true means user is logged in
      window.alert("Login successfull");
      navigate("/"); // After login, go to "/" i.e home page

      // Assuming you receive the 'token' in the response from the backend after successful login
      const token = Data.token;
      document.cookie = `jwtoken=${token}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/;`;
    }
  };

  return (
    <>
      <section className="container signin">
        <div className="container">
          <div className="signin-content">
            <div className="signin-form my-3">
              <div className="signin-image">
                <figure>
                  <input type="image" img src={loginPic} alt="Signin image" />
                  {/* <img src={loginPic} alt="Signin Image" /> */}
                </figure>
                <NavLink to="/Signup" className="signin-image-link">
                  <a href="/signin">Create a Account</a>
                </NavLink>
              </div>
              <h2 className="form-title">Sign in</h2>

              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Your Password"
                    />
                  </label>
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit btn btn-primary"
                    value="Log In"
                    onClick={loginUser}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
