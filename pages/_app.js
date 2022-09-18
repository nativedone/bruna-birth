import "normalize.css";
import "../styles/globals.css";
import { ScrollbarController } from "../components/scrollbar-controller"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ScrollbarController />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
