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

  return (
    <div className="container showItem">
      <div className="card">
        <div className="cardHeader">
          <p>Contact Details</p>
        </div>
        <div className="detailContainer">
          <strong>ID : {id}</strong>
          <br />
          <strong>Name : {item.name}</strong>
          <br />
          <strong>Email : {item.email}</strong>
          <br />
          <strong>Contacts : {item.contact}</strong>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Show;
