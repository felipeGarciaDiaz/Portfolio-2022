import React, { useState, useEffect, useRef } from "react";
import Helmet from "react-helmet";
import Bounce from "react-reveal/Bounce";

import socket from "./socket";
import Socials from "./Socials";
import ContentBox from "./ContentBox";
import Tools from "./Tools";
//dependencies and other components we have
function Main(props) {
	//init hooks

	let intro = useRef("FELIPE GARCIA DIAZ");
	let [climber, setClimber] = useState(0);
	let [descClimber, setDescClimber] = useState(0);
	let [opacitySet, changeOpacity] = useState(0);
	let tagline = useRef("Web Developer & Security Enthusiast");
	let displayIcon = useRef("hidden");
	let [buttonOpacity, changeButtonOpacity] = useState(0);

	const socialMedia = [
		{
			link: "https://www.linkedin.com/in/felipe-garcia-diaz-a91106211/",
			icon: "linkedin",
		},
		{
			link: "https://github.com/felipegarciadiaz",
			icon: "github",
		},
		{
			link: "https://www.youtube.com/channel/UCBiscYqco2N8z7DQsidXaXw/featured",
			icon: "youtube",
		},
		{
			link: "mailto:felipedevsec@gmail.com?subject=Felipe%20GD%20--%20Request%20To%20Contact",
			icon: "email",
		},
	];
	//function generates the typing animation for my name and my title
	useEffect(() => {
		const genName = setInterval(() => {
			if (climber === tagline.current.length) {
				//checks to make sure the description is equal to the number of the climber, looped by the interval in 75ms
				clearInterval(genName);
				displayIcon.current = "visible";
			} else {
				setClimber((val) => val + 1);
				console.log("going", climber);
				//increment and type out my name using the typing animation
			}
		}, 75);
		return () => {
			//honestly dont touch this, its really delicate and if we put the wrong code here we can create bugs on the site
			clearInterval(genName);
		};
	}, [climber, intro, tagline, descClimber]);

	//function handles the opacity and visibility of icons and button, triggers once the name and title are finished
	useEffect(() => {
		if (climber === tagline.current.length) {
			//only runs when name reaches its full length
			const scaleOpacity = setInterval(() => {
				//starts the interval, easy stuff
				if (opacitySet > 1 && buttonOpacity > 1) {
					//clears the interval once we check that opacity for the icons and buttons have reached 1
					clearInterval(scaleOpacity);
				} else {
					changeOpacity((val) => val + 0.0035);
					changeButtonOpacity((val) => val + 0.0025);
					console.log("test", opacitySet);
					//adding the opacity for the icon on top and button on bottom, this seems to be the most aesthetic result between the color difference
				}
			}, 5);
			return () => {
				clearInterval(scaleOpacity);
				//handles clearing the interval
			};
		}
	}, [opacitySet, tagline, buttonOpacity, climber]);

	return (
		<React.Fragment>
			<Helmet>
				<title>Felipe GD</title>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			</Helmet>
			<div clasName='row'>
				<div id='header' className='col s12 spacer layer1'>
					<h1 id='header-title' className='center-align'>
						{intro.current.substring(0, climber)}
					</h1>
					<h4 id='desc' className='center-align'>
						{tagline.current.substring(0, climber)}
					</h4>
					<div className='container' id='social-row'>
						<div className='row'>
							<div id='socials social-row' className='center-align'>
								{socialMedia.map((socials) => (
									<Socials
										getOpacity={opacitySet}
										getVisibility={displayIcon.current}
										link={socials.link}
										icon={socials.icon}
									/>
								))}
							</div>
						</div>
					</div>

					<p className='center-align'>
						<a
							id='header-button'
							className='btn center-align'
							style={{ opacity: buttonOpacity, visibility: displayIcon.current }}
							href='#about'
						>
							Lets Explore!
						</a>
					</p>
				</div>

				<div id='about'>
					<Bounce right>
						<ContentBox
							cols={"col s12 m5 l5 xl5"}
							showInfo='charts'
							htmlMarkupCode={
								<>
									<div>
										<h1 id='content-title'>
											About <span id='content-title-me'>Me</span>
										</h1>
										<p id='content-desc'>
											I've had a passion for computers ever since I was 12 and
											decided to create my own server. Since then I've become
											someone who can create anything they want in the web. My
											experience with Web-App Development combined with my
											education in Cyber Security allows me to create secure,
											professional, and aesthetic looking applications for
											personal and enterprise use.
										</p>
									</div>
								</>
							}
						/>
					</Bounce>

					<Bounce left>
						<ContentBox
							cols={"col s12 m9 l9"}
							showInfo='arrow'
							htmlMarkupCode={
								<>
									<h2 id='libs-title'>Libraries:</h2>
									<p id='libs-desc'>
										Phaser 3, ChartJS, ExpressJS, Socket.io, Bootstrap,
										MaterialUI, Tailwind{" "}
									</p>
									<h2 id='tools-title'>Tools:</h2>
									<p id='tools-desc'>
										Git, Webpack, Bash/CLI, VSCode, Vim, Linux
									</p>
								</>
							}
						/>
					</Bounce>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Main;
