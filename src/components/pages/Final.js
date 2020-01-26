import React from "react";
import {  Grid,Image, Reveal } from 'semantic-ui-react';

import JJ from '../../images/jj.png'



function Final() {
  return (
    <div id="final" class="content-space">
      <div className="text-center">FINAL WORDS</div>
      <br></br>
      <h2>Challenges Faced:</h2>
      <h3 style={{"textAlign":"left","textIndent":"2em"}}> Sometimes elements gave us trouble, and didn't allow us to click on them, even when attempting to use commonly used methods to get around it. One example of this is the dropdown for logout, for Subaha's second story. We could not get the click to work on the log out, even when trying methods that worked for other dropdown menus. <br></br><br></br>
      <div style={{"textAlign":"left","textIndent":"2em"}}>We also had trouble getting jenkins set up, since both of us were using Mac and couldn't follow the exact steps that were shown, although I hope to still get it to work.</div>
      <br></br><br></br>
      <div style={{"textAlign":"left","textIndent":"2em"}}>Some of our teammates were also not used to the Github workflow, so we avoided it all-together to save time, also we used it to keep our project up to date and version control in case something went wrong.</div></h3>

      <div  className="stickOut3">And Finally....</div>

        <div className="stickOut2">
        A special Thank you to Simon Bhai, Sabbir, and Juel for providing us with great knowledge and guidance. All three were incredible instructors and masters of their trade.
      We are very fortunate to have such great instructors teaching us here at TalenTech. 
      </div>

      <br></br>
      <br></br>
       <h1>Any Questions?</h1>
        
       
   
     
      {/* <img id="jj" src={JJ} width="550"></img> */}

      <br />
      
     


     

    
    </div>
  );
}

export default Final;
