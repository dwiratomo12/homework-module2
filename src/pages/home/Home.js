import React, { useState, useEffect } from "react";
import data from "../../Data";

function Home() {
  const artists = data[0].album.artists[0].name;
  const title = data[0].album.name;
  const gambar = data[0].album.images[1].url;
  const width = data[0].album.images[1].width;
  const height = data[0].album.images[1].height;
  const img = <img src={gambar} width={width} height={height}></img>;
  console.log(data);
  return (
    <div>
      My Music <br />
      {img}
      {/* <img src={data.album.images[1].url} width={data.album.images[1].width} height={data.album.images[1].height}></img> */}
      <br />
      <br />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <h3>{title}</h3>
      <p>{artists}</p>
      <button type="submit">Select</button>
    </div>
  );
}

export default Home;
