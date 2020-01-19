import React from "react";
import { Grid, Image, Segment } from 'semantic-ui-react'
import selen from '../../images/SeleniumSuite.png'

function About() {
  return (
    <div class="content-space">
      <h1> So, what is Selenium?</h1>
      <br></br>
       <Grid stackable columns={3} style={{"padding":"20"}} >
    <Grid.Column  >
      
     <section style={{"height":"600px","fontSize":"20px","letterSpacing":"0.5px","color":"##232E3C","lineHeight":"1.5em","backgroundColor":"pink"}}> <span style={{"fontSize":"25px","color":""}}>SELENIUM </span>is a free (open source) automated testing suite for web applications across different browsers and platforms. It is quite similar to HP Quick Test Pro (QTP now UFT) only that Selenium focuses on automating web-based applications. Testing done using Selenium tool is usually referred as Selenium Testing.
      <br>
      </br>
      <br>
      </br>
      Selenium is not just a single tool but a suite of software's, each catering to different testing needs of an organization. <br></br><br></br>It has four main components:<br></br><br></br>

<ul style={{"display":"block"}}>
  <li>Selenium Integrated Development Environment (IDE)</li><br></br>
  <li>Selenium Remote Control (RC)</li><br></br>
  <li>WebDriver</li><br></br>
  <li>Selenium Grid </li><br></br>
</ul>


</section>
    
    </Grid.Column>
    <Grid.Column>
      <img src={selen}></img>
   
      
    </Grid.Column>
    <Grid.Row>
    <Grid.Column>
 
    </Grid.Column>
    <Grid.Column>
      

      
    </Grid.Column>

    </Grid.Row>
    {/* <Grid.Row>
    <Grid.Column>
    
    </Grid.Column>
    <Grid.Column id="selList">
      
      <ul >
        <li>Selenium Integrated Development Environment (IDE)</li>
        <li>Selenium Remote Control (RC) WebDriver</li>
        <li>WebDriver</li>
        <li>Selenium Grid</li>
      </ul>
   


      
    </Grid.Column>
    <Grid.Column>
      
      


      
    </Grid.Column>


    </Grid.Row> */}
    
  </Grid>
    </div>
  );
}

export default About;
