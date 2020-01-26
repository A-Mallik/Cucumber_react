import React from "react";
import {  Grid,Image, Reveal } from 'semantic-ui-react';
import cucumber from '../../images/cucumber.png'
import logo from '../../images/TTC.png'
import freecrm from '../../images/freecrmSs.png'
import freecrm2 from '../../images/ss2.png'



function Project() {
  return (
    <div id="project" class="content-space">
      <br></br>
    
      
      <h1> BDD PROJECT: FreeCRM </h1>
      <h2> We worked on testing different features of the customer relationship management website known as FreeCRM <span className="disabled">(https://www.freecrm.com)</span>. 
       <br></br> 
       <br></br> 
      <img id="freecrmImg" src={freecrm} width="400"></img>
      <img id="freecrmImg2" src={freecrm2} width="550"></img>

      <br />
      
     
</h2>

     

    
    </div>
  );
}

export default Project;
