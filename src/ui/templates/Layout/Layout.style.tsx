import styled from "styled-components";
import { Layout as LayoutAntd, Space as SpaceAntd } from "antd";

export const Header = styled((props) => <LayoutAntd.Header {...props} />)`
  text-align: center;
  color: #fff;
  height: 64px;
  line-height: 64px;
  background-color: #f2f2f2;
`;

export const Content = styled((props) => <LayoutAntd.Content {...props} />)`
  text-align: center;
  min-height: 120px;
  line-height: 120px;
  color: #f2f2f2;
  background-color: #ffffff;
  padding: 15px;
`;

export const Sider = styled((props) => <LayoutAntd.Sider {...props} />)`
  text-align: center;
  line-height: 120px;
  color: #fff;
  background-color: #3ba0e9;
`;

export const Layout = styled((props) => <LayoutAntd {...props} />)`
  height: 100%;
`;
