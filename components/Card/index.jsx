import React from "react";
import Link from 'next/link'
import Button from "@/components/Button_List";

import styles from "./index.module.scss"
// import products from "store/reducers/products";

function Card({
	product,
}) {

	const { id, name, discount, img, price } = product;

	return (
		<div className={styles.card}>
			<div className={styles["card__card"]} key={id}>
				<Link href={`/products/${id}`}>
					<a>
						<img src={img} className={styles["card__img"]} alt="product-img" />
					</a>
				</Link>
				<h3 className={styles["card__name"]}>{name}</h3>
				<div className={styles["card__price-wrap"]}>
					<p className={styles["card__price"]}>{discount ? price * discount : price}$</p>
					<p className={styles["card__discount"]}>{discount ? `${price}$` : null}</p>
				</div>
				<div className={styles["card__btn-wrap"]}>
					{/* <Button
						id={id}
						basketClick={basketClick}
						basketProduct={basketProducts.includes(id)}
					/>
					<Like
						id={id}
						likeClick={likeClick}
						likeProduct={likeProducts.includes(id)}
					/> */}
				</div>
			</div>
		</div>
	);
}

export default Card;