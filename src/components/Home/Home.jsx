import React, { useEffect, useState } from "react";
import "./Home.css";
import ProductData from "../../ProductsData.json";
import RowMaterialData from "../../RowMaterialData.json";
import Section2 from "../Sections/Section2/Section2";
import Section1 from "../Sections/Section1/Section1";
import Section3 from "../Sections/Section3/Section3";
import Section4 from "../Sections/Section4/Section4";
function Home() {
	const [rowData, setRowData] = useState([]);
	const [product, setProduct] = useState("Product 1");
	const [orders, setOrders] = useState([]);
	const [counter, setCounter] = useState(1)
	useEffect(() => {
		const Material = RowMaterialData.filter((Product) => {
			if (Product.product === product) return Product;
		});

		setRowData(Material[0].material);
	}, [product,counter]);

	return (
		<div className="home">
			<Section1 />
			<Section2
				setProduct={setProduct}
				rowData={rowData}
				ProductData={ProductData}
				setOrders={setOrders}
				product={product}
				orders={orders}
			/>
			<Section3 orders={orders} counter={counter}/>
			{
				orders.length>0 && <Section4 
					setCounter={setCounter}
				/>
			}
			
		</div>
	);
}

export default Home;
