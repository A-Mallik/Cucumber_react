import React from "react";
import { Grid, Image } from 'semantic-ui-react'
import lion from '../../images/lion.png'
import cat from '../../images/cat.png'
import kitten from '../../images/kitten.png'

function Tasks() {
  return (
    <div id="tasks" class="content-space">
      <div className="text-center">TASKS</div>
      <br></br>

      <p className="tasksList">
        Make user stories from site based on features to test
      </p>

      <p className="tasksList">
        use Gherkin syntax to write stories in standardized style
      </p>
      <p className="tasksList">Choose and set up BDD framework</p>
      <p className="tasksList">
        Run test cases using feature files, set up with cucumber options
      </p>

      <hr className="hr"></hr>
      
     
    

      <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
      <div className="names">
        Shohan- 3 user stories <br></br>
        <br></br>
        <div class="listI">
          
          1) View Contact from Contact List<br></br>
        </div>
        <div class="listI">
          2) Create New Form<br></br>
        </div>
        <div class="listI">
          3) Create New Task<br></br>
        </div>
        <div class="listI">
          4) Create New Campaign<br></br>
        </div>
        <div class="listI">
          5) Create New Templates<br></br>
        </div>
      </div>
      <img  src={lion} width="350"></img>
      </Grid.Column>
      <Grid.Column>
      <div className="names">
     
      <br></br>
        Subaha- 3 user stories <br></br>
        <br></br>
        <div class="listI">1) Login</div>
        <div class="listI">2) Create New Contact</div>
        <div class="listI">3) Log Out</div>
      </div>

      <br></br> 
       <br></br> 
       <br></br> 
       <br></br> 
       <br></br> 
       
      <img  src={cat} width="350"></img>
      
      </Grid.Column>
      <Grid.Column>
      <div className="names">
     
      <br></br>
       Habibur <br></br><br></br> <div className="listI">Motivation Support</div> <br></br>
        <br></br>

      </div>
      <br></br> 
       <br></br> 
       <br></br> 
       <br></br> 
       <br></br> 
       <br></br> 
     
      <img  src={kitten} width="350"></img>
      </Grid.Column>
    </Grid.Row>

   
  </Grid>

    </div>
  );
}

export default Tasks;
