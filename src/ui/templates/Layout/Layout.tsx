import { Layout as LayoutAntd, Menu, MenuProps } from "antd";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import * as S from "./Layout.style";

export type MenuItem = Required<MenuProps>["items"][number];

interface LayoutProps {
  title: ReactNode;
  menuItems: Array<MenuItem>;
  children: ReactNode;
}

export const Layout = ({ menuItems, children }: LayoutProps) => {
  const router = useRouter();
  return (
    <S.Layout>
      <LayoutAntd>
        <S.Sider collapsible>
          <Menu
            theme="dark"
            mode="inline"
            items={menuItems}
            onClick={(e) => {
              router.push("actives");
            }}
          />
        </S.Sider>
        <S.Content>{children}</S.Content>
      </LayoutAntd>
    </S.Layout>
  );
};
