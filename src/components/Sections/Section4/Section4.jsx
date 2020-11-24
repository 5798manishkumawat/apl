import React from "react";
import "./Section4.css";
import { useStateValue } from "../../../StateProvider";
function Section4() {
	const [{ counter, orders }, dispatch] = useStateValue();

	const handle = (type) => {
		if (type === "p" && counter > 1) {
			dispatch({
				type: "SET_COUNTER",
				counter: counter - 1,
			});
		}
		if (type === "n" && counter * 4 < orders.length) {
			dispatch({
				type: "SET_COUNTER",
				counter: counter + 1,
			});
		}
	};

	return (
		<div className="section4">
			<button className="page_btn" onClick={() => handle("p")}>
				Previous
			</button>
			<button className="page_btn" onClick={() => handle("n")}>
				Next
			</button>
		</div>
	);
}

export default Section4;
