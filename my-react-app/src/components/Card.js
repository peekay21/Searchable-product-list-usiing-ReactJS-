import React from "react";

export default function Card({postTitle, postBody}) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h3>{postTitle}</h3>
        <p className="card-text">
         {postBody}   
        </p>
      </div>
    </div>
  );
}