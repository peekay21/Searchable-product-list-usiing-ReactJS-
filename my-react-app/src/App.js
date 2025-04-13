import React from 'react';
import { useState } from 'react';

let sculptureList = [
  {
    title: "The Kiss",
    artist: "Gustav Klimt",
    image: "https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {
    title: "The Thinker",
    artist: "Auguste Rodin",
    image: "https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {
    title: "David",
    artist: "Michelangelo",
    image: "https://images.unsplash.com/photo-1459802071246-377c0346da93?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
];



export default function App(){

  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const sculpture = sculptureList[index];
  const next = index < sculptureList.length - 1;
  //hasnext function
  function hasNext(){
    if(next){
      setIndex(index + 1);
    }
    else{
      setIndex(0);
    }
  }

  // showMore function
  function showMoreInfo(){
    setShowMore(!showMore);
  }
  
  //Button Component
  function Button({myfunc, children}){
    return (<div>
      <button onClick={myfunc}>{children}</button>
      </div>);
  }
  return (
    <>
    <Button myfunc={hasNext}>Next</Button>
    <h1>{sculpture.title}</h1>
    <h2>{sculpture.artist}</h2>
    
    <Button myfunc={showMoreInfo}>{showMore ? "Show Less" : "Show More"}</Button>
    {showMore && <p>{sculpture.title}</p>}
    <img src={sculpture.image} alt={sculpture.title} style={{height:"150px", width:"150px"}}/>
    </>
  );
}