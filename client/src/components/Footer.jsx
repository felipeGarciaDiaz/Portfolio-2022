import React, { useRef, useEffect } from "react";

function Footer(props) {
	let copyrightYear = useRef(new Date().getFullYear());

	return (
		<React.Fragment>
			<div id='footer'>
				<h6 className='center-align'>
					<b>&copy; {copyrightYear.current} Felipe Garcia Diaz</b>
				</h6>
				<h6 className='center-align'>
					<b>All Rights Reserved</b>
				</h6>
				<h6 className='center-align'>
					<b>813.992.4795</b>
				</h6>
			</div>
		</React.Fragment>
	);
}

export default Footer;
