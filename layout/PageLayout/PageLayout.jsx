import Head from "next/head";

import Header from "./Header";


export const PageLayout = (props) => {

	const { meta, className, children } = props;

	return (
		<div className="page">
			<Head>
				<title>Stuff</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			{children}

		</div>
	);
};