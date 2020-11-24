export const initialState = {
	counter: 1,
	rowData: [],
	product: "Product 1",
	orders: [],
};

const reducer = (state, action) => {
	switch (action.type) {
		case "SET_COUNTER":
			return {
				...state,
				counter: action.counter,
			};
		case "SET_ROWDATA":
			return {
				...state,
				rowData: action.rowData,
			};
		case "SET_PRODUCT":
			return {
				...state,
				product: action.product,
			};
		case "SET_ORDERS":
			return {
				...state,
				orders: action.orders,
			};
		default:
			return state;
	}
};

export default reducer;
