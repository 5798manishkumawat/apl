import React, { useState } from "react";
import Select from "react-select";
import { useStateValue } from "../../../StateProvider";
import "./Section2.css";

function Section2({ ProductData }) {
	const [material, setMaterial] = useState(null);
	const [{ rowData, product, orders }, dispatch] = useStateValue();
	const addProduct = () => {
		let Orders = [...orders];
		if (product && material)
			Orders.unshift({ product: product, material: material });

		dispatch({
			type: "SET_ORDERS",
			orders: Orders,
		});
	};
	return (
		<div className="container">
			<div className="container_product">
				<select
					onChange={(e) =>
						dispatch({
							type: "SET_PRODUCT",
							product: e.target.value,
						})
					}
				>
					<option className="option" value="">
						{" "}
						Select...
					</option>
					{ProductData?.map((Product) => {
						return (
							<option className="option" value={Product}>
								{Product}
							</option>
						);
					})}
				</select>
			</div>
			<div className="container_rowMaterial">
				<Select
					isMulti
					name="rowData"
					options={rowData}
					className="react-select-container"
					classNamePrefix="react-select"
					onChange={(e) => setMaterial(e)}
				/>
			</div>

			<button className="btn" onClick={() => addProduct()}>
				Add Product
			</button>
		</div>
	);
}

export default Section2;
