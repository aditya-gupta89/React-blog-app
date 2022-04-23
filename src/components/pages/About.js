import React from 'react'
// import classes from './About.module.css';
import logo1 from '../../img/code9.jpg';
const About = () => {
  return (
  <div className="section">
		<div className="container">
			<div className="content-section">
				<div className="title">
					<h1>About Us</h1>
				</div>
				<div className="content">
					<h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.</p>
					<div className="button">
						<a href="">Read More</a>
					</div>
				</div>
				<div className="social">
					<a href=""><i className="fab fa-facebook-f"></i></a>
					<a href=""><i className="fab fa-twitter"></i></a>
					<a href=""><i className="fab fa-instagram"></i></a>
				</div>
			</div>
			<div className="image-section">
				<img src={logo1}/>
			</div>
		</div>
	</div>
  )
}

export default About
