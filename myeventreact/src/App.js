import logo from './logo.svg';
import './App.css';
import React, { useContext, useState, useEffect } from "react";
import Google from './google';
function App() {
  const [count, setCount] = useState([]);
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
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
    // https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=slug%2C%20thumbnail%2C%20location_name%2C%20description_fr&where=longdescription_fr%20like%20%22%25${select}%C3%A9rence%25%22&limit=20
    fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=slug%2C%20thumbnail%2C%20location_city%2C%20description_fr&where=location_city%20like%20%22${input}%22&limit=20`)
    .then(response => response.json())
    .then(response =>{
      console.log("ouiiiii",response.results  )
      setCount(response.results)
    } )
  
    .catch(error => console.log("Erreur : " + error));
  }

  function selection(input){
    // https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=slug%2C%20thumbnail%2C%20location_city%2C%20description_fr&where=location_city%20like%20%22${input}%22&limit=20
    fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=slug%2C%20thumbnail%2C%20location_name%2C%20description_fr&where=longdescription_fr%20like%20%22%25${input}%C3%25%22&limit=20`)
    .then(response => response.json())
    .then(response =>{
      console.log("ouiiiii",response.results  )
      setCount(response.results)
    } )
  
    .catch(error => console.log("Erreur : " + error));
  }

  function handleChange(event) {
    setInput(event.target.value)
    setSelect(event.target.value)
    // console.log("oui",select)
    // console.log(event.target.value);
  }

  function display(){
    document.getElementById("google").style.display= "block"
  }

  return (
<>
<div className='google' id='google'>

<Google></Google>
</div>
{/* <button onClick={data}>ok</button> */}
<div className='head'>

  <p>Logo?</p>
<button className='login' onClick={display}>Login</button>
</div>
<label>Location</label>
<input onChange={handleChange} onKeyDown={() => location(input)}></input>
<select onChange={handleChange} onClick={() => selection(select)}>
<option   value="" disabled selected>--Please choose an option--</option>
  <option value="concert">concert</option>
  <option value="expo">expo</option>
  <option value="conférence">conférence</option>
  {/* <option value="parrot">Parrot</option>
  <option value="spider">Spider</option>
  <option value="goldfish">Goldfish</option> */}
</select>
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
