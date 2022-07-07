import React from "react";
import Bounce from "react-reveal/Bounce";

function Tools(props) {
	return (
		<React.Fragment>
			<div className='row'>
				<Bounce left>
					<div id='box' className='offset-m3 offset-l3 col s12 m9 l9'>
						<h2 id='libs-title'>Libraries:</h2>
						<p id='libs-desc'>
							Phaser 3, ChartJS, ExpressJS, Socket.io, Bootstrap, MaterialUI, Tailwind{" "}
						</p>
						<h2 id='tools-title'>Tools:</h2>
						<p id='tools-desc'>Git, Webpack, Bash/CLI, VSCode, Vim, Linux</p>
					</div>
				</Bounce>
			</div>
		</React.Fragment>
	);
}

export default Tools;
