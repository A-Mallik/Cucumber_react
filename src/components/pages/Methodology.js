import React from "react";
import { Grid, Image } from 'semantic-ui-react'


function Methodology() {
  return (
    <div id="methodology" class="content-space">
      <div className="text-center">AGILE METHODOLOGY</div>
      <br></br>

      <p className="tasksList">
      <h2>What is Agile?</h2>
      A methodology of project management divided into tasks to perform short and frequent    tasks.
      </p>

      <br></br>

      <hr className="hr"></hr>
      
     
    

      <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
      <div className="names">
      SDLC is a software development life cycle process used by the tech industry to develop high quality software.
        <br></br>
        <div class="listI">
          
          1) Concept- requirement gathering
<br></br>
        </div>
        <div class="listI">
          2) System Design <br></br>
        </div>
        <div class="listI">
          3) Developement<br></br>
        </div>
        <div class="listI">
          4) Testing - QA starts building test cases to test application and features<br></br>
        </div>
        <div class="listI">
          5) Release - Standard release time is every 5 sprints (two weeks each sprint) <br></br>
        </div>
      </div>
    
      </Grid.Column>
      <Grid.Column>
      <div className="names">
     
      STLC is software testing life cycle a process used by testers to execute in systematic and planned manner.  <br></br>
        <br></br>
        <div class="listI">1) Requirement analysis</div>
        <div class="listI">2) Test Planning</div>
        <div class="listI">3) Test Case Developement</div>
        <div class="listI">4) Environment Setup</div>
        <div class="listI">5) Test Execution</div>
        <div class="listI">6) Test Cycle Closure</div>
      </div>

      <br></br> 
       <br></br> 
       <br></br> 
       <br></br> 
       <br></br> 
       
    
      
      </Grid.Column>
      <Grid.Column>
      <div className="names">
    
       DLC is the opening of a defect and closing it is the cycle.
ibur <br></br><br></br> 
<div className="listI">&nbsp;&nbsp;&nbsp;&nbsp;Testers create defects then gives them to developers > They fix it >Then testers do Regression testing to make sure no other working parts near the original defect were affected by the fix. </div> 
        
<div className="listI">&nbsp;&nbsp;&nbsp;&nbsp;Sometimes developers do not agree to the defect found by the testers > testers need to retest it and take down detailed information, screenshot, steps to reproduce, URL, Severity and Priority > if the developers don't agree to the defect > manage meeting with the developers to talk about the defect in details > if the developer still not convinced > report to your manager > they will have a meeting with( Leads, product owners, developers) > they will decide whether its a defect or not. </div> <br></br>
        <br></br>

      </div>
      <br></br> 
       <br></br> 
       <br></br> 
       <br></br> 
       <br></br> 
       <br></br> 
     

      </Grid.Column>
    </Grid.Row>

   
  </Grid>

    </div>
  );
}

export default Methodology;
