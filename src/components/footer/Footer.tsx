import Image from 'next/image';

export interface FooterProps {}

const Footer = ({}: FooterProps) => {
	return (
		<footer className="flex flex-row items-center justify-center gap-2">
			<Image src="/Logo_ETS.jpg" width={48} height={48} />
			<p className="text-2xl font-normal leading-7 text-[#6F6F6F]">
				École de technologie supérieure, 2022
			</p>
		</footer>
	);
};

export default Footer;
