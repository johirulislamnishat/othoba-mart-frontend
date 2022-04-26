import ContextProvider from "../context/ContextProvider";
import "../styles/globals.css";
import "../styles/ticket.css";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
