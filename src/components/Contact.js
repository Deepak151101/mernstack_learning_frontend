import React, { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...data,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContact();
  }, []); // Add an empty dependency array to run the effect only once on component mount

  // We are storing data in states
  // e is event
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value }); // Here [name] is dynamically changing . Instead of dynamic data we put the value
  };




  // Send Data to backend

  const contactForm = async (e) => {
    e.preventDefault(); // To prevent automatic refreshing behaviour of the form

    // Object Destructuring
    const { name, email, phone, message } = userData;

    // It returns a promise either it will fullfill it or reject it, it will be stored in res
    const res = await fetch('/contact', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({ // The data we want to send to backend has to be converted into string using stringify() function (As server does not understand JSON)

        name, email, phone, message
      }) 
    });

    const data = await res.json(); // res was in string, we convert it into json again to be used in frontend & to avoid this going into pending state we use 'await'

    // Check if data is not received 
    if(!data) {
      console.log("Message not sent");
    } else {
      alert("Message sent");
      setUserData({ ...userData , message: "" }) // After msg is sent we want the user details to still be present in form & we only reset the message field
      // Spread operator ...userData => To keep user's data as it is like name, email, phone number & just make message field blank 



    }

  }


  return (
    <>
      <div className="contact_info">
        <div className="container_fluid">
          <div className="row">
            <div className="short_detail_box col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/* Phone Number */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt="Phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_title">+91 1111 543 2198</div>
                </div>
              </div>
              {/* Email */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt="Phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_title">your@email.com</div>
                </div>
              </div>
              {/* Address */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img
                  src="https://img.icons8.com/office/24/000000/iphone.png"
                  alt="Phone"
                />
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_title">Pune, MH, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Form */}
      <div className="contact_form">
        <div className="container" id="contact_form_main">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-4">
                <div className="contact_form_title">
                  <h3>Get in Touch</h3>
                </div>
                <form method="POST" id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-between my-3">
                    <input
                      type="text"
                      id="contact_form_name"
                      className="contact_form_name input_field px-2 py-2 rounded"
                      name="name"
                      value={userData.name}
                      onChange={handleInputs}
                      placeholder="Your Name"
                      required="true"
                    />
                    <input
                      type="Email"
                      id="contact_form_name"
                      className="email input_field px-2 py-2 rounded"
                      name="email"
                      value={userData.email}
                      onChange={handleInputs}
                      placeholder="Your Email"
                      required="true"
                    />
                    <input
                      type="number"
                      id="contact_form_phone"
                      className="contact_form_phone input_field px-2 py-2 rounded"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputs}
                      placeholder="Your Phone Number"
                      required="true"
                    />
                  </div>

                  <div className="contact_form_text mt-5 ">
                    <textarea
                      className="text_field contact_form_message"
                      name="message"
                      value={userData.message}
                      onChange={handleInputs}
                      placeholder="Message"
                      cols="150"
                      rows="10"
                    ></textarea>
                  </div>

                  <div className="contact_form_button ">
                    <button
                      type="submit"
                      onClick={contactForm}
                      className="button contact_submit_button btn btn-primary p-2 my-3"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
