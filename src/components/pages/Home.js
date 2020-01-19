import React from "react";
import {  Grid,Image, Reveal } from 'semantic-ui-react';
import cucumber from '../../images/cucumber.png'
import logo from '../../images/TTC.png'



function Home() {
  return (
    <div id="home">
      <br></br>
      <div id="title"><img id="logo" src={logo} width="200"></img><span id="titleName">TALENTECH: TEAM CUCUMBER</span>
      
      <h1> BDD PROJECT: FreeCRM </h1>
      

      <br />
      
      <a href="https://cucumber.io/"><img class="rotate" id="img2" src={cucumber} width="350"></img></a>
      <br /></div>
      
      <h1> SUBAHA &nbsp;&nbsp; | &nbsp;&nbsp;  SHOHAN  &nbsp;&nbsp; |&nbsp;&nbsp;   HABIBUR</h1>
     

    
    </div>
  );
}

export default Home;
