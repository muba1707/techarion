import React, { useState } from "react";
import axios from "axios";
import "./postAPI.css";

function PostAPI() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userdata = {
      name,
      email,
      message,
    };

    console.log(userdata);

    axios
      .post(
        "https://supreme-guidance-voice-wake.trycloudflare.com/contact",
        userdata
      )
      .then((res) => res.status(200));
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form-container">
        <div className="form">
          <div className="form-group">
            <h3>Name</h3>
            <input
              type="text"
              value={name}
              name="name"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <h3>Email</h3>
            <input
              type="text"
              value={email}
              name="email"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <h3>Message</h3>
            <input
              type="text"
              value={message}
              name="message"
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default PostAPI;
