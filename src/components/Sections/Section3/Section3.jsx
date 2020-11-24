import React, { useEffect, useState } from "react";
import "./Section3.css";

function Section3({ orders, counter }) {
	const [start, setStart] = useState(0);
	const [end, setEnd] = useState(4);

	useEffect(() => {
		const end = 4 * counter;
		const start = end - 4;
		setStart(start);
		setEnd(end);
	}, [counter]);

	return (
		<div className="section3">
			{orders?.slice(start, end).map((product) => {
				return (
					<div className="product_container">
						<div className="card">
							<h3>{product.product}</h3>
							{product.material?.map((material) => {
								return <p>{material.label}</p>;
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Section3;
