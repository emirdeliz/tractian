import { useUser } from "@/hooks";
import { CompanyModel } from "@/model";
import { TitleSection } from "@/ui";
import { Table } from "antd";
import { memo, useEffect, useState } from "react";

const { Column } = Table;

export const UsersPage = memo(() => {
  const [companies, setUsers] = useState<Array<CompanyModel>>([]);
  const { getUsers } = useUser();

  useEffect(() => {
    (async () => {
      const data = await getUsers();
      setUsers(data);
    })();
  }, [getUsers]);

  return (
    <>
      <TitleSection>Usuários</TitleSection>
      <Table dataSource={companies} size="small" pagination={false} rowKey="id">
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Nome" dataIndex="name" key="name" />
        <Column title="E-mail" dataIndex="email" key="email" />
        <Column title="Unidade" dataIndex="unitId" key="unitId" />
        <Column title="Empresa" dataIndex="companyId" key="companyId" />
      </Table>
    </>
  );
});
