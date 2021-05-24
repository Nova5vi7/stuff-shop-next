import styles from "./index.module.scss";

function Footer() {
	return (
		<footer className={styles.footer}>
			<a
				href="/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by <span className={styles.stuff}>Stuff_Shope</span>
			</a>
		</footer>
	);
}
export default Footer;