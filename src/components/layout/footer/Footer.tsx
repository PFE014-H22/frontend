import Image from 'next/image';
import styles from './Footer.module.scss';

/**
 * Component used to display a common footer for each page.
 */
const Footer = () => {
	return (
		<footer className={styles.container}>
			<Image
				src="/Logo_ETS.png"
				width={48}
				height={48}
				alt="Logo de l'École de Technologie Supérieure"
			/>
			<p className={styles.text}>École de technologie supérieure, 2022</p>
		</footer>
	);
};

export default Footer;
