import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [apiData, setData] = useState([]);

  const fetcher = async () => {
    const res = await axios.get("http://localhost:4000/api/get");
    setData(res.data);
  };

  const deleteHandler = (id) => {
    if (window.confirm("The Contact will be deleted. Do you Want to Delete")) {
      axios
        .delete(`http://localhost:4000/api/delete/${id}`)
        .then((e) => {
          console.log(e);
          const newData = apiData.filter((item) => {
            return item.id !== id;
          });
          console.log(newData);
          setData(newData);
        })
        .catch((err) => {
          alert(err);
        });
      // setTimeout(() => fetcher(), 500);
    }
  };

  useEffect(() => {
    fetcher();
  }, []);
  return (
    <div className="container home">
      <table className="styledTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((item, i) => {
            return (
              <tr key={item.id}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                  <Link to={`Edit/${item.id}`}>
                    <button className="btn btn-Edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-Update"
                    onClick={() => deleteHandler(item.id)}
                  >
                    Delete
                  </button>
                  <Link to={`Show/${item.id}`}>
                    <button className="btn btn-View">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to={"Add"}>
        <button className="btn btn-contact">Add Item</button>
      </Link>
    </div>
  );
};

export default Home;
