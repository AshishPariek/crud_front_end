import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const Add = () => {
  const navigate = useNavigate();
  const [formData, setData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const sumbitBtnHandler = () => {
    if (!formData.name || !formData.email || !formData.contact) {
      alert("Fields Cant't be Empty");
    } else {
      axios
        .post("http://localhost:4000/api/post", {
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
        })
        .then(() => {
          setData({ name: "", email: "", contact: "" });
        })
        .catch((err) => {
          alert(err);
        });
      // toast.success("Added Successfully");
      navigate("/");
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container addContainer">
      <form className="formStyle">
        <div></div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          onChange={changeHandler}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Email..."
          onChange={changeHandler}
        ></input>
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          name="contact"
          placeholder="Contact..."
          onChange={changeHandler}
        ></input>
        <button
          onClick={sumbitBtnHandler}
          style={{ backgroundColor: "green" }}
          className="btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
