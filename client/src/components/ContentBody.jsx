import React from "react";
import Bounce from "react-reveal/Bounce";
import ContentBox from "./ContentBox";
function ContentBody(props) {
	return (
		<React.Fragment>
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
									Phaser 3, ChartJS, ExpressJS, Socket.io, Bootstrap, MaterialUI,
									Tailwind{" "}
								</p>
								<h2 id='tools-title'>Tools:</h2>
								<p id='tools-desc'>
									Git, Figma, Webpack, Bash/CLI, VSCode, Vim, Linux
								</p>
							</>
						}
					/>
				</Bounce>
			</div>
		</React.Fragment>
	);
}

export default ContentBody;
