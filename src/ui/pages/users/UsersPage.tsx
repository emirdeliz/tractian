import { useCompany, useUnit, useUser } from "@/hooks";
import { CompanyModel, UnitModel, UserModel } from "@/model";
import { TitleSection } from "@/ui";
import { Space, Table } from "antd";
import { memo, useEffect, useState } from "react";
import { ModalEditUser } from "./components";

const { Column } = Table;

export const UsersPage = memo(() => {
  const [userEdit, setUserEdit] = useState<UserModel>();
  const [users, setUsers] = useState<Array<CompanyModel>>([]);
  const [companies, setCompanies] = useState<Array<CompanyModel>>([]);
  const [units, setUnits] = useState<Array<UnitModel>>([]);

  const { getUsers } = useUser();
  const { getUnits } = useUnit();
  const { getCompanies } = useCompany();

  useEffect(() => {
    (async () => {
      const data = await getUsers();
      setUsers(data);

      const companiesData = await getCompanies();
      setCompanies(companiesData);

      const unitsData = await getUnits();
      setUnits(unitsData);
    })();
  }, [getCompanies, getUnits, getUsers]);

  return (
    <>
      <TitleSection>Usuários</TitleSection>
      <Table dataSource={users} size="small" pagination={false} rowKey="id">
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Nome" dataIndex="name" key="name" />
        <Column title="E-mail" dataIndex="email" key="email" />
        <Column
          title="Empresa"
          render={(_, record: UserModel) => (
            <>{companies.find((i) => i.id === record.companyId)?.name}</>
          )}
        />
        <Column
          title="Unidade"
          render={(_, record: UserModel) => (
            <>{units.find((i) => i.id === record.unitId)?.name}</>
          )}
        />
        <Column
          title="Editar"
          render={(_, record: UserModel) => (
            <Space size="middle">
              <a onClick={() => setUserEdit(record)}>Editar</a>
            </Space>
          )}
        />
      </Table>
      <ModalEditUser
        units={units}
        companies={companies}
        initialData={userEdit}
        onOk={(data) => {
          const userUpdated = users.map((item) => {
            return item.id === data.id ? data : item;
          });
          setUserEdit(undefined);
          setUsers(userUpdated);
        }}
        onCancel={() => setUserEdit(undefined)}
      />
    </>
  );
});
