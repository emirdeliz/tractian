import { CompanyModel } from "@/model";
import { getUsers } from "@/service";
import { TitleSection } from "@/ui";
import { Table } from "antd";
import { useEffect, useState } from "react";

const { Column } = Table;

const Users = () => {
  const [companies, setUsers] = useState<Array<CompanyModel>>([]);
  useEffect(() => {
    (async () => {
      const data = await getUsers();
      setUsers(data);
    })();
  }, []);

  return (
    <>
      <TitleSection>Usuários</TitleSection>
      <Table dataSource={companies} size="small" pagination={false} rowKey="id">
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Nome" dataIndex="name" key="name" />
        <Column title="E-mail" dataIndex="email" key="email" />
        <Column title="Unidade" dataIndex="unitId" key="unitId" />
        <Column title="Empresa" dataIndex="companyId" key="companyId" />
        {/* <Column
          title="Editar"
          dataIndex="edit"
          key="edit"
          render={(_, record) => (
            <Space size="middle">
              <a onClick={() => setAssetEdit(record as AssetModel)}>Edit</a>
            </Space>
          )}
        /> */}
      </Table>
    </>
  );
};

export default Users;