import React, { useEffect } from "react";
import "./Home.css";
import ProductData from "../../ProductsData.json";
import RowMaterialData from "../../RowMaterialData.json";
import Section2 from "../Sections/Section2/Section2";
import Section1 from "../Sections/Section1/Section1";
import Section3 from "../Sections/Section3/Section3";
import Section4 from "../Sections/Section4/Section4";
import { useStateValue } from "../../StateProvider";
function Home() {
	const [{ product, orders, rowData }, dispatch] = useStateValue();
	useEffect(() => {
		const Material = RowMaterialData.filter((Product) => {
			if (Product.product === product) return Product;
		});

		//console.log(Material);
		dispatch({
			type: "SET_ROWDATA",
			rowData: Material[0].material,
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [product]);

	return (
		<div className="home">
			<Section1 />
			<Section2 ProductData={ProductData} />
			<Section3 />
			{orders.length > 0 && <Section4 />}
		</div>
	);
}

export default Home;
