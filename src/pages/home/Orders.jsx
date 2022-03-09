import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const ALL = "All";
const PAID = "Paid";
const UNPAID = "Unpaid";
const DUE = "";

function Orders() {
  const [data, setData] = useState([]);
  const [tmpData, setTmpData] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    axios
      .get("https://6218dbae1a1ba20cbaadb27d.mockapi.io/demo/orders")
      .then(function (response) {
        // handle success
        setData(response.data);
        setTmpData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const handleFilter = (filter) => {
    setFilter(filter);
    if (filter === PAID) {
      const newDATA = [...tmpData].filter((value) => value.Status === filter);
      setData(newDATA);
      return;
    } else if (filter === UNPAID) {
      const newDATA = [...tmpData].filter((value) => value.Status === filter);
      setData(newDATA);
      return;
    } else if (filter === ALL) {
      return setData(tmpData);
    }
    return setData(tmpData);
  };

  return (
    <div className="main_Orders">
      <div className="banner_Orders">
        <div className="div_Text">
          <h2>Start a brand-new challenge today...</h2>
          <p>After your first scale get a 90:10 profit split</p>
        </div>
        <button>Get Started</button>
      </div>
      <div className="main_Table">
        <div className="header_Table">
          <h2>Order Overview</h2>
          <div className="filter_Table">
            <button
              className={
                filter === ALL ? "filter-item is-active" : "filter-item"
              }
              onClick={() => handleFilter(ALL)}
            >
              All
            </button>
            <button
              className={
                filter === PAID ? "filter-item is-active" : "filter-item"
              }
              onClick={() => handleFilter(PAID)}
            >
              Paid
            </button>
            <button
              className={
                filter === UNPAID ? "filter-item is-active" : "filter-item"
              }
              onClick={() => handleFilter(UNPAID)}
            >
              Unpaid
            </button>
            <button onClick={() => handleFilter(DUE)}>Due</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => {
              let textStatus = "";
              if (value.Status === "Paid") {
                textStatus = "Paid";
              } else if (value.Status === "Unpaid") {
                textStatus = "Unpaid";
              } else {
                textStatus = "Due";
              }
              return (
                <tr key={index}>
                  <td>{value.Order}</td>
                  <td>{value.Date}</td>
                  <td>{value.Price}</td>
                  <td>{textStatus}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Orders;
