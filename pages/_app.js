import '../styles/globals.scss'
import { Provider } from 'react-redux'
import { useStore } from "../store";


export default function MyApp({ Component, pageProps }) {
	console.log(pageProps)
	const store = useStore(pageProps.initialReduxState)

	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}