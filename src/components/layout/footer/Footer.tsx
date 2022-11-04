import Image from 'next/image';
import styles from './Footer.module.scss';

/**
 * Component used to display a common footer for each page.
 */
const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={styles.logo__wrapper}>
				<Image
					src="/Logo_ETS.png"
					width={48}
					height={48}
					alt="Logo de l'École de Technologie Supérieure"
				/>
			</div>
			<p className={styles.text}>École de technologie supérieure, 2022</p>
		</footer>
	);
};

export default Footer;
