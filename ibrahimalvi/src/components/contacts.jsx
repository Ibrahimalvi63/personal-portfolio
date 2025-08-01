import React, { useContext, useState } from "react";
import axios from "axios";
import { AppData } from "../context/appContext";

function Contacts() {
  const { personalData } = useContext(AppData);
  const contactData = personalData?.contacts || [];

  const initialValue = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialValue);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseUrl = import.meta.env.VITE_URI;
      await axios.post(`${baseUrl}/api/message`, formData);
      alert("Form data submitted successfully");
    } catch (err) {
      console.error("Data fetching error: ", err);
    }
    setFormData(initialValue);
  };
  return (
    <div className="contact-sec">
      <div className="container">
        <h2>Fill free to contact</h2>
        <div className="contact-con">
          <div className="info-con">
            <p>
              <strong>Phone: </strong>
              <a href="">{contactData.phone}</a>
            </p>
            <p>
              <strong>Email: </strong>
              <a href="">{contactData.email}</a>
            </p>
            <p>
              <strong>GitHub: </strong>
              <a href="">{contactData.gitHub}</a>
            </p>
          </div>
          <div className="message-con">
            <form onSubmit={handleSubmit}>
              <div className="input-con">
                <input
                  type="text"
                  className="input-field"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
              </div>

              <div className="input-con">
                <input
                  type="text"
                  className="input-field"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="input-con">
                <input
                  type="text"
                  className="input-field"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>

              <div className="input-con">
                <textarea
                  name="message"
                  className="input-field"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message goes here..."
                  style={{ overflowY: "auto", resize: "none", height: "10rem" }}
                ></textarea>
              </div>
              <button className="contact-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
