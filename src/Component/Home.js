import React, { useState } from "react";
import "../App.css";

const axios = require("axios");

export default function Home() {
  const [data, setData] = useState([]);

  const formdata = new FormData();
  formdata.append("category", "movies");
  formdata.append("language", "kannada");
  formdata.append("genre", "all");
  formdata.append("sort", "voting");

  axios
    .post("https://hoblist.com/movieList", formdata)
    .then(function (response) {
      // console.log(response);

      var x = response.data.result;
      setData(x);
      // console.log(data);
    })
    .catch(function (error) {
      console.log("here", error);
    });

  return (
    <div>
      <h1>Home Page</h1>
      <div className="dropdown">
        <button className="dropbtn">Menu</button>
        <div className="dropdown-content">
          <p>Company: Geeksynergy Technologies Pvt Ltd</p>
          <p>Address: Sanjayanagar, Bengaluru-56</p>
          <p>Phone:XXXXXXXXX09</p>
          <p>Email: XXXXXX@gmail.com</p>
        </div>
      </div>

      {data.map((p, i) => {
        return (
          <div className="main" key={i}>
            <div className="left">
              <img src={p.poster} height="240px" width="200px" />
            </div>

            <div className="right">
              <h2>{p.title}</h2>
              <p>Genre :{p.genre}</p>
              <p>Director :{p.director}</p>
              <p>Starring :{p.stars}</p>
              <h4>Mins | English | 2 apr</h4>
              <h3>{p.pageViews} | voted by 1 people</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
