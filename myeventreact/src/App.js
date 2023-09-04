import logo from './logo.svg';
import './App.css';
import React, { useContext, useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState([]);
  const [input, setInput] = useState("");
  async function data(){
  
  }

  useEffect(() => {
     fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=slug%2C%20thumbnail%2C%20location_city%2C%20description_fr&limit=20")
    .then(response => response.json())
    .then(response =>{
      console.log("ouiiiii",response.results  )
      setCount(response.results)
    } )
  
    .catch(error => console.log("Erreur : " + error));
    // console.log(count)
  },[]);

  function location(input){
    fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=slug%2C%20thumbnail%2C%20location_city%2C%20description_fr&where=location_city%20like%20%22${input}%22&limit=20`)
    .then(response => response.json())
    .then(response =>{
      console.log("ouiiiii",response.results  )
      setCount(response.results)
    } )
  
    .catch(error => console.log("Erreur : " + error));
  }

  function handleChange(event) {
    setInput(event.target.value)
    // console.log(event.target.value);
  }


  return (
<>
{/* <button onClick={data}>ok</button> */}
<label>Location</label>
<input onChange={handleChange} onKeyDown={() => location(input)}></input>
<div className='center'>

{count.map((index) => (
  <div>

    <p>event : {index.slug}</p>
    <img src={index.thumbnail}></img>
    <p> {index.description_fr}</p>
    <p>location : {index.location_city}</p>
  </div>
    ))}
    </div>

</>
  );
}

export default App;
