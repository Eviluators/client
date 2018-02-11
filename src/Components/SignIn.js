import React, { Component } from 'react';
import eviluators from './eviluators.png';
import GitHubLogo from './GitHub-Mark-120px-plus.png';
import Villian from './scary_moon.mp4';
import './SignIn.css';


export default class SignIn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
		<div>
			<div className="content content--fixed sign-in-div">
			</div>
			<div className="content">
                  
				<div className="glitch">
          <video autoPlay  loop className="video glitch__img">
            <source src={Villian} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>
          <div className="filter"></div>
					<div className="glitch__img"></div>
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
				</div>
        <div className="logo-div content__title">
            <img className="logo" src={eviluators} alt="eviluators logo"/>
         </div>
         <div className="gh-div content__text">
           <a href="https://eviluator-auth.herokuapp.com/auth/github">
         <button className="gh-btn">
           <img src={GitHubLogo} className="gh-logo" alt="Github Logo" />
         </button>
         </a>
         <p className="gh-p">Sign In With GitHub</p>
         </div> 
         </div>
		</div>
    )
  }
}