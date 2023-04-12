import { TitleSection } from "@/ui";
import { Space, Table } from "antd";
import { memo } from "react";

const { Column } = Table;

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

const Actives = () => {
  return (
    <>
      <TitleSection>Ativos</TitleSection>
      <Table dataSource={dataSource} size="small" pagination={false}>
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Nome" dataIndex="name" key="name" />
        <Column
          title="Pontuação de Saúde"
          dataIndex="healthscore"
          key="healthscore"
        />
        <Column title="Status" dataIndex="status" key="status" />
        <Column
          title="Editar"
          dataIndex="edit"
          key="edit"
          render={() => (
            <Space size="middle">
              <a>Edit</a>
            </Space>
          )}
        />
      </Table>
      ;
    </>
  );
};

export default memo(Actives);
