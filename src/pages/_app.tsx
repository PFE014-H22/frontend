import type { AppType } from 'next/app';
import Footer from '../components/layout/footer/Footer';
import Header from '../components/layout/header/Header';
import { COLOR_SCHEME } from '../styles/colors';
import '../styles/globals.css';
import { trpc } from '../utils/trpc';

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
			<div
				className={`${COLOR_SCHEME.bodyBackgroundColor} flex min-h-screen flex-col gap-2 p-4`}
			>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</div>
		</>
	);
};

export default trpc.withTRPC(MyApp);
