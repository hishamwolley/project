import React from "react";

const ArticleSection3 = ({ img, alt }) => {
	return (
		<section style={{ width: "33%" }}>
			<article style={{ maxWidth: "95%" }}>
				<h4>Unmatched speed and reliability</h4>
				<img src={img} alt={alt}></img>
				<p style={{ fontSize: "14px" }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam neque
					est, semper vel tristique in, laoreet non lectus. Nulla efficitur
					libero at velit tempus condimentum.
				</p>
			</article>
		</section>
	);
};

export default ArticleSection3;
