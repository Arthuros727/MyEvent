import React, { useContext, useState, useEffect } from "react";
import { useCookies } from 'react-cookie';
import SortieForm from "./SortieForm";

function HomePage() {
  const [count, setCount] = useState([]);
  const [details, setDetails] = useState([]);
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
   const [user, setUser] = useState([]);
   const [cookies, setCookie] = useCookies(['name']);
  async function data(){
  
  }

  useEffect(() => {
     fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=uid%2C%20slug%2C%20thumbnail%2C%20location_name%2C%20description_fr%2C%20longdescription_fr&limit=20")
    .then(response => response.json())
    .then(response =>{
      console.log("ouiiiii",response.results  )
      setCount(response.results)
    } )
  
    .catch(error => console.log("Erreur : " + error));

    fetch(`http://127.0.0.1:8000/test`)
    .then(response => response.json())
    .then(response =>{
      console.log("ouiiiii",response)
      setUser(response)
      console.log(user)
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

  function fetchuser(){
    // https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=slug%2C%20thumbnail%2C%20location_city%2C%20description_fr&where=location_city%20like%20%22${input}%22&limit=20
    document.getElementById("friends").style.display="block"
  }

  function addfriend(input){
    // let expires = new Date()
    // expires.setTime(expires.getTime() + (response.data.expires_in * 1000))
    // setCookie('friend', input, { path: '/', expires })

    setCookie('name', input);
    window.location.href = `http://127.0.0.1:8000/friend/${input}`;
    
  }

  function disp(uid){
    
    fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/evenements-publics-openagenda/records?select=uid%2C%20slug%2C%20thumbnail%2C%20location_name%2C%20description_fr%2C%20longdescription_fr&where=uid%3D${uid}&limit=20`)
    .then(response => response.json())
    .then(response =>{
      console.log("ouiiiii",response.results  )
      setDetails(response.results)
    } )
    
    // document.getElementById("det").style.display="block"

  }

  function hide(){
    // document.getElementById("det").style.display="none"
    setDetails([]);
    console.log("oui")
  }

  function ajouterSortie(a) {
    // Les données que vous souhaitez envoyer à Laravel
    // const data = {
    //   uid: 'valeur_uid',
    //   creator: 'valeur_creator',
    //   participant: 'valeur_participant',
    //   private: 'valeur_private',
    // };
  
    // Effectuer la requête GET vers Laravel
    // window.location.href ='http://127.0.0.1:8000/addsortie';
    fetch(`http://127.0.0.1:8000/addsortie/${a}`)
     
      .then(response => {
        if (response.ok) {
          // La requête s'est bien passée, vous pouvez gérer la réponse ici
          console.log('Données ajoutées avec succès.');
        } else {
          // Gérer les erreurs de la requête ici
          console.error('Erreur lors de l\'ajout des données.');
        }
      })
      .catch(error => {
        // Gérer les erreurs réseau ici
        console.error('Erreur réseau :', error);
      });
  }

  return (
<>
<div className='google' id='google'>

</div>
{/* <button onClick={data}>ok</button> */}
<div className='head'>

  <p>Logo?</p>
  <button className='amis' onClick={fetchuser}>Amis</button>
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
<div className="friends" id="friends">
<p>ALL USER :</p>
{user.map((index) => (
  <div className='map'>

    <p>{index.name}</p>
    <button value={index.id} onClick={()=>addfriend(index.id)}>add</button>
   
  </div>
    ))}
</div>
  
{details.map((index) => (
  <div className="details" id="det">
    <button onClick={()=> hide()}>x</button>
  <p>event : {index.slug}</p>
    <img src={index.thumbnail}></img>
    <div dangerouslySetInnerHTML={{__html: index.longdescription_fr}} />    
    {/* <SortieForm></SortieForm> */}
    <button onClick={()=>ajouterSortie($index.uid)}>ADD</button>
    <button>Show</button>
  </div>
))}
{count.map((index) => (
  <div className='map' onClick={()=>disp(index.uid)}>

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

export default HomePage;