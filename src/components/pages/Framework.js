import React from "react";
import { Grid, Image } from 'semantic-ui-react'

function Framework() {
  return (
    <div id="framework" class="content-space">
      <div className="text-center">FRAMEWORK</div>
      <br></br>
      <h2> Our framework was designed based off of the BDD method, implementing Gherkin so both technical and non-technical people can collaborate on the project.</h2>

      <hr className="hr"></hr>
      <h3> What is BDD and TDD?</h3>
      <br></br>

      <p className="tasksList">
     <span className="stickOut"> TDD</span> is a test driven development, a method of implementing software programming. It instructs developers to write new code on automated failed tests. It helps to avoid duplication of code. Simple concept of TDD is to write and correct failed tests before writing new code.

      </p>

      <p className="tasksList">
      <span className="stickOut">BDD</span> is behavior driven development( (think of it that way that BDD is an additional tool to be more agile). BDD test cases being written in a common language and understood by all. It is a development in agile software development process. It is to create simple scenarios. Cucumber is a test framework that supports BDD. Gherkin is a language that cucumber understands.

      </p>
     
      <p className="tasksList">
     

      </p>

      
 


    

      {/* <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
 
      </Grid.Column>
      <Grid.Column>
      
      
      </Grid.Column>
      <Grid.Column>

      </Grid.Column>
    </Grid.Row>

   
  </Grid> */}

    </div>
  );
}

export default Framework;
