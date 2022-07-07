import React, { useEffect, useRef } from "react";
import { SocialIcon } from "react-social-icons";

function Socials(props) {
	let size = useRef("20");

	//init hooks
	useEffect(() => {
		//creats a js method to detect screen size and updates the icons depending on the size.
		if (window.innerWidth > 500) {
			size.current = 50;
		} else {
			size.current = 25;
		}
	}, [size]);

	return (
		<React.Fragment>
			<div className='col s3' id='social-row'>
				<SocialIcon
					id={props.icon}
					style={{
						opacity: props.getOpacity,
						visibility: props.getVisibility,
						width: size.current,
						height: size.current,
					}}
					bgColor='#FFFFFF'
					fgColor='#2C2C2C'
					network={props.icon}
					url={props.link}
				/>
			</div>
		</React.Fragment>
	);
}

export default Socials;
