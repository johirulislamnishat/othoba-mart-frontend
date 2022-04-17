import AuthProvider from "../components/context/AuthProvider";
import CartProvider from '/components/context/CartProvider'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<AuthProvider>
			<CartProvider>
			<Component {...pageProps} />
			</CartProvider>
		</AuthProvider>
	);
}

export default MyApp;
