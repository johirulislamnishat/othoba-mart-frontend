import { Image } from "antd";
import Link from "next/link";

export const DrawerTitle = (
	<Link href="/" passHref>
		<div className="text-center cursor-pointer">
			<Image
				preview={false}
				src="/othoba-mart-logo-light.png"
				alt="Othoba Mart"
				className={`px-5 mb-1`}
			/>
		</div>
	</Link>
);
