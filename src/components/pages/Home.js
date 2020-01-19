import React from "react";
import {  Grid,Image, Reveal } from 'semantic-ui-react';
import cucumber from '../../images/cucumber.png'



function Home() {
  return (
    <div id="home">
      <br></br>
      <div id="title"><span id="titleName">TALENTECH PROJECT: TEAM CUCUMBER</span>
      
      <h1> BDD Project: FreeCRM </h1>
      

      <br />
      
      <a href="https://cucumber.io/"><img class="rotate" id="img2" src={cucumber} width="350"></img></a>
      <br /></div>
      
      <h1> Subaha &nbsp;&nbsp; | &nbsp;&nbsp;  Shohan  &nbsp;&nbsp; |&nbsp;&nbsp;   Habibur</h1>
     

    
    </div>
  );
}

export default Home;
