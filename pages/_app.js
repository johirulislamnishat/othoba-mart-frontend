import ContextProvider from "../components/context/ContextProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<ContextProvider>
			<Component {...pageProps} />
		</ContextProvider>
			
			
		
	);
}

export default MyApp;
