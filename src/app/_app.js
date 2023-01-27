import { wrapper } from "@/config/redux/store/store"

function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);