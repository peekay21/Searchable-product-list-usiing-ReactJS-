import React, { useState, useEffect } from "react";
import Card from "./Card";
export default function Posts(){
    const [postData, setPostData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then(data => {
            setPostData(data); 
            
          })
          .catch(err => {
            console.error("Error fetching:", err);
        
          });
      }, []); 

      return (
        
        <>
        { postData.map(posts => (
            <Card 
                postTitle={posts.title} 
                postBody={posts.title}
            />
        ))}
        </>
      );

}