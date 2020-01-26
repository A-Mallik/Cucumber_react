import React from "react";
import { Link, Route } from "react-router-dom";
import TestReport from '../../images/testss.png'
import Jira from '../../images/jiraSS.png'


function Tools(props) {
  return (
    <div class="content-space" id="tools">
      <div className="names">
          <div className="text-center"> What tools and language we used?<br></br><br></br></div>
           <hr className="hr"></hr>
        <br></br>
        <div class="listI">
          
     <div className = "listI">
            <span class="stickOut">JIRA</span> - Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.<br></br>
            </div>
     <div className = "listI">
            <span class="stickOut">Java</span> - Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.<br></br>
            </div>
            <div class="listI">
            <span class="stickOut">Eclipse</span> - Eclipse is an integrated development environment used in computer programming. It contains a base workspace and an extensible plug-in system for customizing the environment.<br></br>
            </div>
            <div class="listI">
            <span class="stickOut">Selenium</span> - A portable framework for testing web applications.<br></br>
            </div>
            <div class="listI">
             
            <span class="stickOut">Maven project</span> - Maven is a powerful project management tool that is based on POM (project object model). It is used for projects build, dependency and documentation.<br></br>
            </div>
            <div class="listI">
            <span class="stickOut">Github</span> -an American company that provides hosting for software development version control using Git. ... It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features.<br></br>
            </div>
            <div class="listI">
            <span class="stickOut">Chrome Driver</span> - WebDriver is an open source tool for automated testing of webapps across many browsers. It provides capabilities for navigating to web pages, user input, JavaScript execution, and more.<br></br>
            </div>
            <div class="listI">
            <span class="stickOut">TestNG </span>- Testing framework for the Java programming language.<br></br>
            </div>
            <div class="listI">
            <span class="stickOut">Cucumber</span> -  A  software tool used by computer programmers that supports behavior-driven development (BDD).<br></br>
            </div>
            <div class="listI">
           <span class="stickOut"> Gherkin</span> - the format for cucumber specifications. It is a domain specific language which helps you to describe business behavior without the need to go into detail of implementation.<br></br>
            </div>
            <div class="listI">
           <span class="stickOut"> Extent Report and Cucumber Reports:</span> <br></br>

            </div>
            <h1>HTML Extent Report</h1>
            <img  src={TestReport} style={{"width":"80vw",}}></img> 
            <h1>JIRA</h1>
            <img  src={Jira} style={{"width":"80vw",}}></img> 
            
            {/* <div class="listI">
            Jenkin-  An open source automation server. It helps to automate the non-human part of the software development process.<br></br>
            </div> */}
     </div>
        
      </div>
   
    </div>
  );
}

export default Tools;
