import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import featchData from "helpers/featch_data"
import actionTypes from "store/actions/action-types";
import Card from "@/components/Card";

const setProducts = (products) => ({
	type: actionTypes.SET_PRODUCTS,
	payload: {
		products,
	},
});

function Products() {
	const products = useSelector((state) => state.products)
	const dispatch = useDispatch()

	//TODO решить проблему с асинхронным запросом

	// useEffect(async () => {
	// 	if (Boolean(products.length)) retrun

	// 	const data = await featchData()

	// 	dispatch(setProducts(data))

	// }, []);



	return (
		<div className="cards">
			<h1 className="cards__title">Products</h1>
			<div className="cards__wrap">
				{
					Object.values(products).length ?
						Object.values(products).map((itm) => {
							return (
								<Card
									product={itm}
									key={itm.id}
								/>
							);
						}) : <div>Hello</div>
				}
			</div>
		</div>
	);
}



export default Products;