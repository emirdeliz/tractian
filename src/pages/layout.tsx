import { Layout as LayoutTemplate, MenuItem } from "@/ui";
import {
  HomeOutlined,
  BankOutlined,
  PieChartOutlined,
  CodeSandboxOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Head from "next/head";
import Image from "next/image";
import { ReactNode, memo } from "react";

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: Array<MenuItem>
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
};

const items = [
  getItem("Home", "home", <HomeOutlined />),
  getItem("Ativos", "assets", <PieChartOutlined />),
  getItem("Unidades", "units", <BankOutlined />),
  getItem("Empresas", "companies", <CodeSandboxOutlined />),
  getItem("Usuários", "users", <UserOutlined />),
];

interface LayoutProps {
  children: ReactNode;
}

const Layout = memo(({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Tractian Challenge</title>
        <meta name="description" content="Tractian Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutTemplate
        menuItems={items}
        title={<Image src="banner.svg" alt="Banner" width={150} height={70} />}
      >
        {children}
      </LayoutTemplate>
    </>
  );
});

export default Layout;
