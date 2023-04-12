import { Layout } from "@/ui/components";
import GlobalStyle from "./global.style";
import { Space } from "antd";

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
