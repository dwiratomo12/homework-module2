import React, { useState, useEffect } from "react";
import data from "../../Data";

function Home() {
  const Card = {
    margin: "10px",
    border: "1px solid #000",
    padding: "10px",
    width: "200px",
    borderRadius: "20px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  };

  const Button = {
    paddingTop: "5px",
    paddingBottom: "5px",
    width: "70px",
    color: "white",
    backgroundColor: "blue",
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", backgroundColor: "rgb(149, 223, 232)" }}>
        {data.map((d) => {
          return (
            <div style={Card}>
              <img src={d.album.images[1].url} width="200" style={{ borderRadius: "20px" }}></img>
              <h3>{d.name}</h3>
              <p>{d.artists[0].name}</p>
              <button style={Button}>Select</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
