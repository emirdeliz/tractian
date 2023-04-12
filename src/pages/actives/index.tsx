import { TitleSection } from "@/ui";
import { BarChart } from "@/ui/atoms";
import { Col, Row, Space, Table } from "antd";
import { memo } from "react";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Health Score",
    dataIndex: "healthscore",
    key: "healthscore",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
  },
];

const Actives = () => {
  return (
    <>
      <TitleSection>Ativos</TitleSection>
      <Table dataSource={dataSource} columns={columns} size="small" />;
    </>
  );
};

export default memo(Actives);
