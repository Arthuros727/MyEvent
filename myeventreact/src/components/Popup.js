import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function Popup() {
  function fetchuser(){
    document.getElementById("friends").style.display="block"
  }
<button className='amis' onClick={fetchuser}>Amis</button>
}
  
  export default Popup;