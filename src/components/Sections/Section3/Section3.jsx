import React, { useEffect, useState } from "react";
import "./Section3.css";
import { useStateValue } from "../../../StateProvider";
function Section3() {
	// eslint-disable-next-line no-unused-vars
	const [{ orders, counter }, dispatch] = useStateValue();
	const [start, setstart] = useState(0);
	const [end, setEnd] = useState(4);

	useEffect(() => {
		let value = counter * 4;

		let st = counter===0?0:value - 4;
		let ed = counter===0?4:value;
		setstart(st);
		setEnd(ed);
		//console.log(orders);
	}, [counter, orders]);

		console.log("===>",orders,start,end);

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
