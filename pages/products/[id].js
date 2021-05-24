import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'


export default function Product() {
	const { query } = useRouter();
	const products = useSelector((state) => state.products)
	const dispatch = useDispatch()

	//TODO решить проблему с асинхронным запросом

	const productId = parseInt(query.id)
	console.log(products);

	const { id, name, price, discount, img } = products[productId];



	return (
		<div>
			<div className="like-product">
				{<div className="like-product__content-wrap" key={id}>
					<div className="like-product__content">
						<div className="like-product__img-wrap">
							<img className="like-product__img" src={img} alt={`img${name}`} />
						</div>
						<div className="like-product__content-info">
							<h4 className="like-product__content-name">{name}</h4>
							<p className="like-product__content-price">
								{discount ? price * discount : price}$
							</p>
						</div>
					</div>
				</div>}
			</div>
		</div>
	);
}


