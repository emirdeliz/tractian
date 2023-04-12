import { ReactNode, memo } from "react";
import { Divider, Typography } from "antd";

const { Title } = Typography;

interface TitleSectionProps {
  children: ReactNode;
}

export const TitleSection = memo(({ children }: TitleSectionProps) => {
  return (
    <>
      <Title level={3}>{children}</Title>
      <Divider />
    </>
  );
});
