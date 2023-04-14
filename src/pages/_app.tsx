import Layout from "./layout";
import GlobalStyle from "./global.style";
import { Loading, LoadingProvider } from "@/ui";

interface MainProps {
  Component: () => JSX.Element;
  pageProps: any;
}

const Main = ({ Component, pageProps }: MainProps) => {
  return (
    <LoadingProvider>
      <Loading />
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </LoadingProvider>
  );
};

export default Main;
