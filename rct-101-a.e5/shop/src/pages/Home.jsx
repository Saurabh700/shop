import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then((d) => {
        setItem(d);
      });
  }, []);
  return (
    <div>
      {item.map((prod) => (
        <div key={prod.id}>
          <img src={prod.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Home;
