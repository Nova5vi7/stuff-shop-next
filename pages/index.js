import styles from '../styles/Home.module.css'
import { PageLayout } from "../layout/PageLayout";
import Products from "../layout/PageLayout/Products"
import actionTypes from "store/actions/action-types";
import featchData from "helpers/featch_data"
import { initializeStore } from 'store'

const setProducts = (products) => ({
	type: actionTypes.SET_PRODUCTS,
	payload: {
		products
	},
});


export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<PageLayout>
					<Products />
				</PageLayout>
			</main>
		</div>
	)
}

export async function getServerSideProps() {
	const reduxStore = initializeStore()
	const { dispatch } = reduxStore

	const data = await featchData()
	dispatch(setProducts(data))

	return { props: { initialReduxState: reduxStore.getState() } }
}
