import React from "react";
import signupImg from "../Images/signupImg.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import { useState } from "react";

const Signup = () => {
  let name,email, phone, work, password, cpassword;
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name,
    email,
    phone,
    work,
    password,
    cpassword,
  });

  let value;
  // e is event
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name; // When user enter anything in input field, name attribute of input field will be replaced by e.target.name (value of name attribute of any input field is updated)
    value = e.target.value; // To get value what user has entered, to store it

    setUser({ ...user, [name]: value }); // [name] is used bcz it will be updating dynamically
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user; // Object Destructuring

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // JSON is to exchange data to/from a web server. When sending data to a web server, the data has to be a string. Convert a JS object into a string with JSON.stringify()
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");

      navigate("/login");
    }
  };

  return (
    <>
      <section className="container signup">
        <div className="container mt-5">
          <div className="signup-content mt-2 mb-2">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>

              <form method="POST" className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      value={user.name}
                      onChange={handleInputs}
                      placeholder="Your Name"
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icons-name"></i>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInputs}
                      placeholder="Your email"
                    />
                  </label>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInputs}
                      placeholder="Your Phone number"
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="work">
                    <i class="zmdi zmdi-slideshow material-icons-name"></i>
                    <input
                      type="text"
                      name="work"
                      id="work"
                      autoComplete="off"
                      value={user.work}
                      onChange={handleInputs}
                      placeholder="Your Profession"
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
                      value={user.password}
                      onChange={handleInputs}
                      placeholder="Your Password"
                    />
                  </label>
                </div>
                <div className="form-group">
                  <label htmlFor="cpassword">
                    <i class="zmdi zmdi-lock material-icons-name"></i>
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      autoComplete="off"
                      value={user.cpassword}
                      onChange={handleInputs}
                      placeholder="Your Confirm Password"
                    />
                  </label>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="Register"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>

            <div className="signup-image">
              <figure>
                <input
                  type="image"
                  src={signupImg}
                  alt="Signup Image"
                  className="signupImg"
                />
                {/* <img src={signupImg} alt="Signup Image" /> */}
              </figure>
              <NavLink to="/Login" className="signup-image-link">
                <a href="/signin">I am already registered</a>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
