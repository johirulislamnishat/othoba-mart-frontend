import AuthProvider from "../context/AuthProvider";
import ContextProvider from "../context/ContextProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<ContextProvider>
			<AuthProvider>
				<Component {...pageProps} />
			</AuthProvider>
		</ContextProvider>
	);
}

export default MyApp;
