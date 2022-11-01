import '../styles/globals.css';
import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc';

const MyApp: AppType = ({ Component, pageProps }) => {
	return (
		<>
			<div className="container mx-auto flex min-h-screen flex-col gap-2 p-4">
				<Component {...pageProps} />
			</div>
		</>
	);
};

export default trpc.withTRPC(MyApp);
