import React, { useRef } from "react";

function Projects(props) {
	return (
		<React.Fragment>
			<h1 className='center-align'>
				<div id='project-body' className='col s12 m5 l3 center-align'>
					<h3 id='project-title'> &lt; {props.title} /&gt;</h3>
					<img
						id='project-logo'
						className='responsive-img'
						src={props.img}
						alt='project logo'
					/>
					<div id='links'>
						<h3>
							<a id='project-code' href={props.git}>
								Github
							</a>
						</h3>
						<h3>
							<a id='project-link' href={props.link}>
								Project
							</a>
						</h3>
					</div>

					<h5 id='project-desc'>{props.desc}</h5>
					<h5 id='projects-stack'>Tech Used: {props.stack}</h5>
				</div>
			</h1>
		</React.Fragment>
	);
}
//HERE WE WILL CREATE A COMPONENT SIMILAR TO THE ONE IN FIGMA, WE WILL HAVE A MATERIALUI MODULAR AS A POP UP FOR MORE DETAILS

export default Projects;
