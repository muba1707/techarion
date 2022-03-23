import React, { useEffect, useState } from "react";
import "./GetAPIRequest.css";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(" https://gorest.co.in/public/v1/todos")
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <div className="contentBoard">
      {data.map((item) => (
        <div key={item.id} className="box">
          {item.title}
        </div>
      ))}
    </div>
  );
}

export default FetchData;
