import React, { useContext, useState, useEffect } from "react";
// import Popup from "reactjs-popup";

function HomePage() {
  const [count, setCount] = useState([]);
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  async function data(){
  
  }

  useEffect(() => {
    //https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=slug%2C%20thumbnail%2C%20location_city%2C%20description_fr&limit=20
     fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=*&lang=fr")
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
    window.location.href = "http://127.0.0.1:8000/login";
  }

  function openpopup(uid){
    var btn = document.getElementById(uid);
    btn.removeAttribute("hidden");

    // let iframe = document.getElementById('dummyframe');
    // iframe.setAttribute("hidden", "");
  }

  function closepopup(uid){
    var btn = document.getElementById(uid);
    btn.setAttribute("hidden", "");
  }

  return (
<>
<div className='google' id='google'>

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
</select>
<div className='center'>

  

{count.map((index) => (
  <div className='map'>
    <p>event : {index.slug}</p>
    <img src={index.thumbnail}></img>
    <p> {index.description_fr}</p>
    <p>location : {index.location_city}</p>
    <div dangerouslySetInnerHTML={{__html: index.longdescription_fr}} />
    <button onClick={() => openpopup(index.uid)}>Créer une sortie</button>
    <div id={index.uid} className="pop" hidden>

    <iframe name="dummyframe" id="dummyframe" hidden></iframe>
      <form action="http://localhost:8000/createSortie" method="POST" target="dummyframe">
        <label>Nom de la sortie :</label>
        <input type='text' name='nom_sortie' className="form" required></input>

        <label for="visibility-select">visibility:</label>
        <select name="visibility" className="form" required>
          <option value="" disabled>--Choisissez la confidentialité--</option>
          <option value="publique">Publique</option>
          <option value="prive">Prive</option>
        </select>

        <input name="id_events" value={index.uid} hidden></input>

        <input type="submit" value="Créer la sortie" onClick={() => closepopup(index.uid)} />
      </form>
    </div>
  </div>
    ))}
    </div>

</>
  );
}

export default HomePage;