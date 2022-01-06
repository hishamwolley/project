import React from "react";
import { BsArrowRight } from "react-icons/bs";

const PostSection2 = ({ img, alt }) => {
	return (
		<section style={{ width: "33%" }}>
			<h3 style={{ maxWidth: "95%" }}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</h3>
			<img style={{ width: "95%" }} src={img} alt={alt}></img>
			<p style={{ fontSize: "14px", maxWidth: "95%" }}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque
				est, semper vel tristique in, laoreet non lectus. Nullam accumsan
				condimentum tincidunt. Nullam ultricies magna nec tellus sodales
				fermentum. Aliquam magna sem, consequat id dignissim vitae, consectetur
				ut ipsum.
			</p>
			<a href="#" style={{ display: "block" }}>
				Lorem ipsum dolor sit amet, consectetur adipiscing amet.
				<span style={{ marginLeft: ".5rem" }}>
					<BsArrowRight />
				</span>
			</a>
			<a href="#" style={{ display: "block" }}>
				Lorem ipsum dolor sit amet
				<span style={{ marginLeft: ".5rem" }}>
					<BsArrowRight />
				</span>
			</a>
		</section>
	);
};

export default PostSection2;
