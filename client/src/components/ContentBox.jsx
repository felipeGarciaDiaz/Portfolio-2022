import React, { useState } from "react";
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

	return (
		<React.Fragment>
			<div className='row'>
				{(() => {
					if (window.innerWidth > 500 && props.showInfo === "arrow") {
						return (
							<div id='show-projects' className='col s12 m3 l3'>
								<h1 className='center-align'>
									<a href='#projects' className='arrow down'></a>
								</h1>
							</div>
						);
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
								<h1 className='center-align'>
									<a href='#projects' className='arrow down'></a>
								</h1>
							</div>
						);
					}
				})()}
			</div>
		</React.Fragment>
	);
}

export default ContentBox;
