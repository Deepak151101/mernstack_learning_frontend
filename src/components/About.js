import React, { useEffect, useState } from "react";
import userPic from "../Images/user.png";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // Authorization: `Bearer ${localStorage.getItem("token")}`, // Send the token in the Authorization header
        },
        credentials: "include", // Send cookies along with the request
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);  // Add an empty dependency array to run the effect only once on component mount

  return (
    <>
      <div className="container emp-profile mt-5 px-3 py-3">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <input
                type="image"
                img
                src={userPic}
                className="pphoto"
                alt="profile photo"
              />
              {/* <img src={userPic} className="pphoto" alt="profile photo" /> */}
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className="profile-rating mt-3 mb-5">
                  RANKINGS: <span> 1/10</span>{" "}
                </p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn px-2 py-2 rounded"
                value="Edit Profile"
                name="btnAddMore"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work mx-2 my-2 font-weight-bold ">
                <p className="text-underline-hover" id="link_text">
                  Links
                </p>
                <a
                  href="linkedin"
                  target="blank"
                  rel="noopener noreferrer"
                  className="link-dark text-decoration-none pt-2"
                >
                  LinkedIn
                </a>
                <br />
                <a
                  href="github"
                  target="blank"
                  rel="noopener noreferrer"
                  className="link-dark text-decoration-none pt-2"
                >
                  GitHub
                </a>
                <br />
                <a
                  href="instagram"
                  target="blank"
                  rel="noopener noreferrer"
                  className="link-dark text-decoration-none pt-2"
                >
                  Instagram
                </a>
                <br />
                <a
                  href="email"
                  target="blank"
                  rel="noopener noreferrer"
                  className="link-dark text-decoration-none pt-2"
                >
                  Email
                </a>
                <br />
                <a
                  href="instagram"
                  target="blank"
                  rel="noopener noreferrer"
                  className="link-dark text-decoration-none pt-2"
                >
                  Whatsapp
                </a>
                <br />
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row pt-3">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>EMP201410000</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.work}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show "
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row pt-3">
                    <div className="col-md-6">
                      <label> Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label> Hourly Rate</label>
                    </div>
                    <div className="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label> Total Projects</label>
                    </div>
                    <div className="col-md-6">
                      <p>150</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label> English Level</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label> Availability</label>
                    </div>
                    <div className="col-md-6">
                      <p>6 Months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
