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
			{/* <div className="message">Sorry, your browser does not support clip-path on HTML elements!</div> */}
			<div className="content content--fixed sign-in-div">
			</div>
			<div className="content">
                  
				<div className="glitch">
					{/* <div className="glitch__img"></div> */}

          <video autoPlay  loop className="video glitch__img">
            <source src={Villian} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
          </video>
          <div className="filter"></div>
					<div className="glitch__img"></div>
          <div className="glitch__img"></div>
          <div className="glitch__img"></div>
					{ /* <div className="glitch__img"></div>
					<div className="glitch__img"></div>
					<div className="glitch__img"></div> */}
				</div>
        <div className="logo-div content__title">
            <img className="logo" src={eviluators} alt="eviluators logo"/>
         </div>
				{/* <h2 className="content__title">Haunted</h2> */}
				{/* <p className="content__text">Evening was in the wood, louring with storm. A time of drought had sucked the weedy pool  and baked the channels; birds had done with song.</p> */}

         <div className="gh-div content__text">
         <button className="gh-btn">
           <img src={GitHubLogo} className="gh-logo" alt="Github Logo" />
         </button>
         <p className="gh-p">Sign In With GitHub</p>
         </div> 
         </div>


		</div>
      /* // <div className="sign-in-div">

      //    <div className="logo-div">
      //   <img className="logo" src={eviluators} alt="eviluators logo"/>
      //   </div>
      //   <div className="gh-div">
      //   <button className="gh-btn">
      //     <img src={GitHubLogo} className="gh-logo" alt="Github Logo" />
      //   </button>
      //   <p className="gh-p">Sign In With GitHub</p>
      //   </div> 
      //   <div className="filter"></div>
      //   <video autoPlay  loop className="video">
      //       <source src={Villian} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
      //   </video>
      // </div> */
    )
  }
}