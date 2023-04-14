/**
 ******** Pontos de observação ********
 * -- Show all features of assets --
 *  No challenge informei somente os dados que aparecem no README
 *  pois não ficou claro se deveria mostrar todos os dados retornados pela API
 *  ou somente pelo o que constava no README da api.
 *
 * -- Show companies, units and users --
 *  No challenge mostrei esses dados através de um sidebar. Apesar de não ter descrito como
 *  deveria mostrar os dados.
 *
 * -- Actions such as delegating responsibility, updating assets, company, unit and users --
 * No challenge entendi que essas actions seriam na relação entre assets e demais itens.
 * Por isso não apliquei essas actions aos demais páginas.
 *
 * Um ponto de dúvida foi as efetivações dessas actions já que não encontrei um endpoint de escrita.
 *
 */

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
