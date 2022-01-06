import React from "react";
import backgroundImage from "../../images/background-image.png";
import { BsArrowRight } from "react-icons/bs";
import playButton from "../../images/play-button.png";

const Section1 = () => {
	return (
		<main
			style={{
				// height: "700px",
				backgroundImage: `url(${backgroundImage})`,
				width: "100%",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<section style={{ width: "100%", height: "100%", display: "flex" }}>
				<div style={{ height: "100%", width: "50%" }}>
					<section
						style={{
							paddingTop: "50px",
							paddingLeft: "30px",
							height: "450px",
						}}
					>
						<h1 style={{ color: "white" }}>Lorem Ipsum Dolor</h1>
					</section>

					<article
						style={{
							color: "white",
							fontSize: "20px",
							paddingLeft: "30px",
							maxWidth: "80%",
						}}
					>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
							ex nibh. Duis ultricies turpis mi, vel plvinar us auctor sed.
							Aenean fermentum nunc erat, suscipit feugiat magna comentum vitae.
							Sed pulvinar, massa quis.
						</p>
						<button
							style={{
								fontSize: "16px",
								boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
								backgroundColor: "#02509a",
								border: "none",
								color: "white",
								padding: "10px 16px",
								marginTop: "3rem",
								display: "flex",
								alignItems: "center",
								width: "190px",
								justifyContent: "space-between",
							}}
						>
							<span>Get Started Now</span>
							<span>
								<BsArrowRight size="1.25rem" />
							</span>
						</button>
					</article>
				</div>
				<div className="playParent" style={{ width: "50%" }}>
					<h1 className="playChild" style={{ color: "white" }}>
						<img src={playButton} alt="play logo"></img>
					</h1>
				</div>
			</section>
			<section
				style={{
					width: "100%",
					backgroundColor: "#3a3b3c",
					display: "flex",
					marginTop: "6rem",
					paddingTop: "3rem",
					paddingBottom: "3rem",
				}}
			>
				<section
					style={{
						width: "50%",
						color: "white",
						paddingLeft: "30px",
					}}
				>
					<article>
						<h4>Blue Barricade Support for Blockchain Transfers</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
							ex nibh. Duis ultricies turpis mi, vel pulvinar purus auctor sed.
							Aenean fermentum nunc erat Lorem ipsum dolor sit amet, consectetur
							adipiscing elit.
						</p>
					</article>
				</section>
				<section
					style={{
						width: "50%",
						display: "flex",
						height: "100%",
						justifyContent: "flex-end",
					}}
				>
					<button
						style={{
							marginRight: "40px",
							fontSize: "16px",
							backgroundColor: "#02509a",
							border: "none",
							color: "white",
							padding: "10px 16px",
							marginTop: "3rem",
							display: "flex",
							alignItems: "center",
							width: "190px",
							justifyContent: "space-between",
						}}
					>
						<span>Explore More</span>
						<span>
							<BsArrowRight size="1.25rem" />
						</span>
					</button>
				</section>
			</section>
		</main>
	);
};

export default Section1;
