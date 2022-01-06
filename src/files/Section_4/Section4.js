import React from "react";
import ArticleSection4 from "./ArticleSection4";
import TabsSection4 from "./TabsSection4";

const Section4 = () => {
	return (
		<div
			style={{
				backgroundColor: "#ebecf0",
				width: "100%",
				paddingTop: "2rem",
				paddingBottom: "1.5rem",
			}}
		>
			<section
				style={{
					display: "flex",
					width: "100%",
				}}
			>
				<section style={{ width: "30%", paddingLeft: "30px" }}>
					<h4>
						Blockchain <br />
						Solutions
					</h4>
				</section>
				<div style={{ width: "70%" }}>
					<section style={{ width: "100%", display: "flex" }}>
						<ArticleSection4
							text="Lorem ipsum dolor"
							link="Lorem ipsum dolor"
						/>
						<ArticleSection4
							text="Lorem ipsum dolor it amet"
							link="Lorem ipsum dolor it amet"
						/>
						<ArticleSection4
							text="Lorem ipsum dolor"
							link="Lorem ipsum dolor"
						/>
					</section>

					<section style={{ marginTop: "8rem", width: "100%" }}>
						<TabsSection4 text1="Healthcare" text2="Lorem Ipsum" />
						<TabsSection4 text1="Dolor" text2="Consectetur " />
						<TabsSection4 text1="Pretium " text2="Amet" />
						<TabsSection4 text1="Healthcare" text2="Ipsum" />
					</section>
				</div>
			</section>
		</div>
	);
};

export default Section4;
