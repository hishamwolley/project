import React from "react";
import { Row, Col } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const TabsSection4 = ({ text1, text2 }) => {
	return (
		<Row style={{ marginTop: "1.5rem" }}>
			<Col>
				<div
					style={{
						width: "90%",
						backgroundColor: "white",
						height: "2.75rem",
						borderRadius: "4px",
						display: "flex",
						alignItems: "center",
						paddingLeft: ".5rem",
					}}
				>
					<a href="#" style={{ fontSize: "18px" }}>
						{text1}
						<span style={{ marginLeft: ".5rem" }}>
							<BsArrowRight />
						</span>
					</a>
				</div>
			</Col>
			<Col>
				<div
					style={{
						width: "90%",
						backgroundColor: "white",
						height: "2.75rem",
						borderRadius: "4px",
						display: "flex",
						alignItems: "center",
						paddingLeft: ".5rem",
					}}
				>
					<a href="#" style={{ fontSize: "18px" }}>
						{text2}
						<span style={{ marginLeft: ".5rem" }}>
							<BsArrowRight />
						</span>
					</a>
				</div>
			</Col>
		</Row>
	);
};

export default TabsSection4;
