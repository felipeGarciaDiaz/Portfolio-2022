import React, { useState } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SkillData } from "./media/resources/data.js";
import BarChart from "./BarChart";
function ContentBox(props) {
	const [skillData, setSkillData] = useState({
		labels: SkillData.map((data) => data.skill),
		datasets: [
			{
				label: "My Skills",
				data: SkillData.map((data) => data.skillMastered),
				backgroundColor: ["#ff008c", "#590696", "#FBCB0A"],
			},
		],
		legend: {
			display: false,
		},
	});
	/*let size = useRef("20");

	//init hooks
		useEffect(() => {
		//creats a js method to detect screen size and updates the icons depending on the size.
		if (window.innerWidth > 500) {
			size.current = 50;
		} else {
			size.current = 25;
		}
	}, [size]);*/

	return (
		<React.Fragment>
			<div className='row'>
				{(() => {
					//								<FontAwesomeIcon icon='fa-solid fa-arrow-turn-down' />{" "}

					if (window.innerWidth > 500 && props.showInfo === "arrow") {
						return <div id='show-projects' className='col s12 m3 l3'></div>;
					}
				})()}
				<div id='content-box' className={props.cols}>
					{props.htmlMarkupCode}
				</div>
				{props.showInfo === "charts" && (
					<div className='col s12 m7 l7 xl7' id='skills-bar'>
						<BarChart chartData={skillData} />
					</div>
				)}

				{(() => {
					if (window.innerWidth < 500 && props.showInfo === "arrow") {
						return (
							<div id='show-projects' className='col s12 m12 l12'>
								s{" "}
							</div>
						);
					}
				})()}
			</div>
		</React.Fragment>
	);
}

export default ContentBox;

/*

			<div className='row'>
				<Bounce right>
					<div id='content-box' className='col s12 m5 l5 xl5'>
						<h1 id='content-title'>
							About <span id='content-title-me'>Me</span>
						</h1>
						<p id='content-desc'>
							I've had a passion for computers ever since I was 12 and decided to
							create my own server. Since then I've become someone who can create
							anything they want in the web. My experience with Web-App Development
							combined with my education in Cyber Security allows me to create secure,
							professional, and aesthetic looking applications for personal and
							enterprise use.
						</p>
					</div>

					
				</Bounce>
			</div>
*/
