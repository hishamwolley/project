import React from "react";
import ArticleSection3 from "./ArticleSection3";
import clock from "../../images/section3/clock.png";
import talking from "../../images/section3/talking.png";
import thinking from "../../images/section3/thinking.png";

const Section3 = () => {
	return (
		<section
			style={{
				display: "flex",
				width: "100%",
				backgroundColor: "white",
				paddingTop: "2rem",
				paddingBottom: "2rem",
			}}
		>
			<section style={{ width: "30%", paddingLeft: "30px" }}>
				<h4>Benefits</h4>
			</section>
			<section style={{ width: "70%", display: "flex" }}>
				<ArticleSection3 img={clock} alt="clock logo" />
				<ArticleSection3 img={talking} alt="messages logo" />
				<ArticleSection3 img={thinking} alt="thinking logo" />
			</section>
		</section>
	);
};

export default Section3;
