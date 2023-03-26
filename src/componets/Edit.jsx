import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // const [isDataFetched, setIsFetched] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const fetcher = async () => {
    setFetching(true);
    const res = await axios.get(`http://localhost:4000/api/get/${id}`);
    setValues(res.data[0]);
    setFetching(false);
  };

  useEffect(() => {
    fetcher();
  }, []);

  const sumbitBtnHandler = () => {
    axios
      .put(`http://localhost:4000/api/put/${id}`, {
        name: values.name,
        email: values.email,
        contact: values.contact,
      })
      .then(() => {
        setValues({ name: "", email: "", contact: "" });
      })
      .catch((err) => alert(err));
    navigate("/");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  if (fetching) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="container addCon">
      <form className="formStyle">
        <div className="detailsHeader">Edit Contact</div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          placeholder="Name..."
          onChange={changeHandler}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={values.email}
          placeholder="Email..."
          onChange={changeHandler}
        ></input>
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          name="contact"
          value={values.contact}
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

export default Edit;
