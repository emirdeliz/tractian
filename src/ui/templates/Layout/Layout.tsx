import { Layout as LayoutAntd, Menu, MenuProps } from "antd";
import { useRouter } from "next/router";
import { ReactNode, memo } from "react";
import * as S from "./Layout.style";

export type MenuItem = Required<MenuProps>["items"][number];

interface LayoutProps {
  menuItems: Array<MenuItem>;
  children: ReactNode;
  title: ReactNode;
}

export const Layout = memo(({ menuItems, children, title }: LayoutProps) => {
  const router = useRouter();
  return (
    <S.Layout>
      <S.Header>{title}</S.Header>
      <LayoutAntd>
        <S.Sider collapsible>
          <Menu
            theme="dark"
            mode="inline"
            items={menuItems}
            onClick={(e) => {
              router.push(e.key);
            }}
          />
        </S.Sider>
        <S.Content>{children}</S.Content>
      </LayoutAntd>
    </S.Layout>
  );
});
