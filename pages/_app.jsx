import { Provider } from 'react-redux';
import { store } from '../redux/store';

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      шапка
      <hr />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <hr />
      подвал
    </>
  );
}