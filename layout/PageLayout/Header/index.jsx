import Image from "next/image";
import Link from "next/link";

import ButtonList from "@/components/Button_List";

import styles from "./index.module.scss";

// const LikeBtn = ({ onClick, icon }) => {
//     let className = "";
//     switch (icon) {
//         case "like":
//             className = "fa-heart-o";
//             break;
//         case "cart":
//             className = "fa-shopping-basket";
//             break;
//         default:
//             className = "fa-angellist";
//     }
//     return (
//         <button className="header__image-like" onClick={() => onClick(true)}>
//             <i className={`fa ${className}`} />
//         </button>
//     );
// };

function Header({
	dataLikeProductFilter,
	dataBasketProductsFilter,
	handleLikeDelete,
	handleBasketDelete,
}) {
	return (
		<header className={styles.header}>
			<div className={styles["header__logo-wrap"]}>
				<Link href="/" >
					<a>
						<Image src='/images/ellipse.png' alt="logo" width={50} height={50} />
						<h3 className={styles["header__logo-title"]}>STUFF</h3>
					</a>
				</Link>
			</div>

			<div className={styles["header__nav"]}>
				<div className={styles["header__nav-wrap"]}>
					{/*<Dropdown*/}
					{/*    data={dataLikeProductFilter}*/}
					{/*    productDelete={handleLikeDelete}*/}
					{/*    dropdownTrigger={LikeBtn}*/}
					{/*    icon="like"*/}
					{/*/>*/}
					<ButtonList src={"/images/like.svg"} width={"28"} height={"25"} />
				</div>
				<div className={styles["header__nav-wrap"]}>
					{/*<Dropdown*/}
					{/*    data={dataBasketProductsFilter}*/}
					{/*    productDelete={handleBasketDelete}*/}
					{/*    dropdownTrigger={LikeBtn}*/}
					{/*    icon="cart"*/}
					{/*/>*/}
					<ButtonList src={"/images/basket.svg"} width={"28"} height={"25"} />
				</div>
			</div>
		</header>
	);
}
export default Header;
