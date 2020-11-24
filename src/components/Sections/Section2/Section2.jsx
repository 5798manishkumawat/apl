import React, { useState } from "react";
import Select from "react-select";
import "./Section2.css";

function Section2({
	ProductData,
	setProduct,
	rowData,
	setOrders,
	product,
	orders,
}) {
	const [material, setMaterial] = useState(null);
	const addProduct = () => {
		let Orders = [...orders];
		if(product && material)
		Orders.unshift({ product: product, material: material });

		setOrders(Orders);
	};
	return (
		<div className="container">
			<div className="container_product">
				<select onChange={(e) => setProduct(e.target.value)}>
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
