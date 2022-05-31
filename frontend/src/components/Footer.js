import React, { Component } from 'react'
import './css/Footer.css' ;
export default class Footer extends Component {
  render() {
    return (
        <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="footer-col">
                    <h4>HouseArmy</h4>
                    <ul>
                    <li className="nav-item active">
         <a className="nav-link" href="/"id="icon-bar" ><b>HOME</b><i className="fa fa-home" id="nav-icon"></i><span className="sr-only">(current)</span></a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/suggestions" id="icon-bar"><b> SUGGESTIONS</b><i className="fa fa-book" id="nav-icon"></i></a>
       </li>
       <li className="nav-item">
         <a className="nav-link" href="/contactUs" id="icon-bar" ><b>CONTACT US</b><i className="fa fa-phone"id="nav-icon"></i></a>
       </li>
      
                    </ul>
                </div>
                <div className="footer-col">
                    <h4> ABOUT US <i className="fa fa-smile" id="nav-icon"></i> </h4>
                    <p  style={{color:"white" , fontSize:"10px"}}><i>
                House army about us Your happiness is our goal. If you’re not happy, we’ll work to make it right. Our friendly customer service agents are available 24 hours a day, 7 days a week. The Handy Happiness Guarantee only applies when you book and pay for a service directly through the Handy platform.
                   </i> </p>
                </div>
            
                <div className="footer-col">
                    <h4> &copy; 2022 HouseArmy</h4>
                    <div className="social-links">
                        
                     
 
                 
                    
                    </div>
                </div>
            </div>
        </div>
   </footer>
    )
  }
}