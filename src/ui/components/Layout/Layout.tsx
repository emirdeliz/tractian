import { Layout as LayoutTemplate, MenuItem } from "@/ui";
import {
  BankOutlined,
  PieChartOutlined,
  CodeSandboxOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import { ReactNode } from "react";

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
  getItem("Ativos", "actives", <PieChartOutlined />),
  getItem("Unidades", "units", <BankOutlined />),
  getItem("Empresas", "companies", <CodeSandboxOutlined />),
  getItem("Usuários", "users", <UserOutlined />),
];

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutTemplate
      title={
        <Image
          src="/banner.png"
          alt="Banner Tractian"
          width={120}
          height={17}
        />
      }
      menuItems={items}
    >
      {children}
    </LayoutTemplate>
  );
};
