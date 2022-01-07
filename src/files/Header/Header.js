import React from "react";
import logo from "../../images/logo-interim.png";
import { BsSearch } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";

const Header = () => {
	return (
		<header
			style={{
				width: "100vw",
				borderBottom: "1px solid #d3d3d3",
			}}
		>
			<div
				style={{
					padding: "0 0 0 10px",
					height: "75px",
					borderBottom: "1px solid #d3d3d3",
					width: "100%",
				}}
			>
				<nav
					style={{
						display: "flex",
						alignItems: "center",
						width: "100%",
						height: "100%",
					}}
				>
					<div
						style={{
							display: "flex",
							width: "75%",
							height: "100%",
							alignItems: "center",
						}}
					>
						<img src={logo} style={{ height: "65px" }} alt="logo"></img>
					</div>
					<section
						style={{
							width: "25%",
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-around",
						}}
					>
						<div
							style={{
								width: "60%",
								height: "100%",
								display: "flex",
								alignItems: "center",
							}}
						>
							<div
								style={{
									paddingLeft: "10px",
									paddingRight: "10px",
									display: "flex",
									alignItems: "center",
									height: "75%",
									justifyContent: "center",
									borderLeft: "1px solid #d3d3d3",
									borderRight: "1px solid #d3d3d3",
								}}
							>
								<input
									type="text"
									placeholder="Search"
									style={{
										width: "100%",
										border: "none",
										outline: "none",
										fontSize: "20px",
										display: "flex",
										alignItems: "center",
									}}
								></input>
								<BsSearch size="1.25rem" />
							</div>
						</div>
						<div
							style={{
								width: "35%",
								display: "flex",
								alignItems: "center",
							}}
						>
							<div style={{ width: "50%" }}>
								<RiUser3Line size="1.25rem" />
							</div>
							<div style={{ width: "50%" }}>
								<AiOutlineMenu size="1.375rem" />
							</div>
						</div>
					</section>
				</nav>
			</div>
			<nav
				style={{
					display: "flex",
					alignItems: "center",
					height: "40px",
					width: "100%",
					justifyContent: "flex-start",
					borderBottom: "2px solid #d3d3d3",
				}}
			>
				<ul
					style={{
						margin: 0,
						padding: 0,
						display: "flex",
						width: "100%",
						alignItems: "center",
					}}
				>
					<li>
						<Dropdown className="btn">
							<Dropdown.Toggle
								className="btn"
								style={{ fontWeight: "bold", color: "#02509a" }}
								variant="none"
							>
								Blockchain
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</li>
					<li style={{}}>
						<Dropdown className="btn">
							<Dropdown.Toggle
								style={{ color: "#02509a" }}
								className="btn"
								tag="text"
								variant="none"
							>
								AI
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</li>
					<li style={{}}>
						<Dropdown className="btn">
							<Dropdown.Toggle
								style={{ color: "#02509a" }}
								className="btn"
								tag="text"
								variant="none"
							>
								Newsroom
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</li>
					<li style={{}}>
						<Dropdown className="btn">
							<Dropdown.Toggle
								style={{ color: "#02509a" }}
								className="btn"
								tag="text"
								variant="none"
							>
								Catalogue
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</li>
					<li style={{}}>
						<Dropdown className="btn">
							<Dropdown.Toggle
								style={{ color: "#02509a" }}
								className="btn"
								tag="text"
								variant="none"
							>
								Solutions
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</li>
					<li style={{}}>
						<Dropdown className="btn">
							<Dropdown.Toggle
								style={{ color: "#02509a" }}
								className="btn"
								tag="text"
								variant="none"
							>
								Test API
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</li>

					<li style={{}}>
						<Dropdown className="btn">
							<Dropdown.Toggle
								style={{ color: "#02509a" }}
								className="btn"
								tag="text"
								variant="none"
							>
								Explore More
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</li>

					<li style={{}}>
						<Dropdown className="btn">
							<Dropdown.Toggle
								style={{ color: "#02509a" }}
								className="btn"
								tag="text"
								variant="none"
							>
								Contact
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</li>


				</ul>
			</nav>
		</header>
	);
};

export default Header;
