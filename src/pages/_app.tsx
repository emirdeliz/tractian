import { Layout } from "./layout";
import GlobalStyle from "./global.style";

interface MainProps {
  Component: () => JSX.Element;
  pageProps: any;
}

const Main = ({ Component, pageProps }: MainProps) => {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
};

export default Main;
