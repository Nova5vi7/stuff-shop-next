import React from "react";
import Image from "next/image";

import styles from "./index.module.scss";

function Like({ src, width, height }) {
	return (
		<div className={styles.button}>
			<button
				className="button-like__btn"
			>
				<Image src={src} width={width} height={height} />
			</button>
		</div>
	);
}

export default Like;