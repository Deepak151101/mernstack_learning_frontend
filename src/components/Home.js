import React, {useState, useEffect} from "react";

const Home = () => {

  const [userName, setUserName] = useState('');

  const [show, setShow] = useState(false);

  // const show = false;

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true); // If we get user's data then set value of setShow to true

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []); // Add an empty dependency array to run the effect only once on component mount



  return (
    <>
      <div className="home-page">
        <div className="home_division">
          <div className="left_home"></div>

          <div className="right_home"></div>
        </div>

        <div className="home_info">
          <div className="home_info_banner">
            <p className="pt-5">WELCOME</p>
            <h1>{userName}</h1>
            <h2>{ show ? "Happy to see you back!" : "We are The Community of Developers"}</h2> {/* Ternary operator is used - default value is set to false */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
