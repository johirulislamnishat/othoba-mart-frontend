/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function useWindowDimensions() {
	const hasWindow = typeof window !== "undefined";

	function getWindowDimensions() {
		const width = hasWindow ? window.innerWidth : null;
		return {
			width,
		};
	}

	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		if (hasWindow) {
			function handleResize() {
				setWindowDimensions(getWindowDimensions());
			}

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}
	}, [hasWindow]);

	return windowDimensions;
}
