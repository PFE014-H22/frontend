import type { AppType } from 'next/app';
import Footer from '../components/layout/footer/Footer';
import Header from '../components/layout/header/Header';
import styles from '../styles/app.module.scss';
import '../styles/globals.scss';
import { trpc } from '../utils/trpc';

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
			<div className={styles.container}>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</div>
		</>
	);
};

export default trpc.withTRPC(MyApp);
