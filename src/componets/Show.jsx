import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Show = () => {
  const { id } = useParams();
  const [isFetched, setFetched] = useState(true);
  const [item, setItem] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const fetcher = async () => {
    const res = await axios.get(`http://localhost:4000/api/get/${id}`);
    setItem(res.data[0]);
    setFetched(false);
  };

  useEffect(() => {
    fetcher();
  }, []);

  if (isFetched) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="container showItem">
        <div className="detailContainer">
          <h2>Contact Details</h2>
          <strong>ID : {id}</strong>
          <strong>Name : {item.name}</strong>
          <strong>Email : {item.email}</strong>
          <strong>Contacts : {item.contact}</strong>
        </div>
      </div>
    );
  }
};

export default Show;
