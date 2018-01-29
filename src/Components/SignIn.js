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
      <div className="sign-in-div">
         <div className="logo-div">
        <img className="logo" src={eviluators} alt="eviluators logo"/>
        </div>
        <div className="gh-div">
        <button className="gh-btn">
          <img src={GitHubLogo} className="gh-logo" alt="Github Logo" />
        </button>
        <p className="gh-p">Sign In With GitHub</p>
        </div> 
        <div className="filter"></div>
        <video autoPlay  loop className="video">
            <source src={Villian} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
        </video>
      </div>
    )
  }
}