import { ReactNode } from "react";
import { Divider, Typography } from "antd";

const { Title } = Typography;

interface TitleSectionProps {
  children: ReactNode;
}

export const TitleSection = ({ children }: TitleSectionProps) => {
  return (
    <>
      <Title level={3}>{children}</Title>
      <Divider />
    </>
  );
};
