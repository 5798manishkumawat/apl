import React from "react";
import "./Section4.css";

function Section4({ setCounter }) {
	return (
		<div className="section4">
			<button
				className="page_btn"
				onClick={setCounter((prevCount) => prevCount - 1)}
			>
				Previous
			</button>
			<button
				className="page_btn"
				onClick={setCounter((prevCount) => prevCount + 1)}
			>
				Next
			</button>
		</div>
	);
}

export default Section4;
