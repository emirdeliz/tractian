import { useCompany } from "@/hooks";
import { CompanyModel } from "@/model";
import { TitleSection } from "@/ui";
import { Space, Table } from "antd";
import { memo, useEffect, useState } from "react";
import { ModalEditCompany } from "./components";

const { Column } = Table;

export const CompaniesPage = memo(() => {
  const [companyEdit, setCompanyEdit] = useState<CompanyModel>();
  const [companies, setCompanies] = useState<Array<CompanyModel>>([]);
  const { getCompanies } = useCompany();
  useEffect(() => {
    (async () => {
      const data = await getCompanies();
      setCompanies(data);
    })();
  }, [getCompanies]);

  return (
    <>
      <TitleSection>Empresas</TitleSection>
      <Table dataSource={companies} size="small" pagination={false} rowKey="id">
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Nome" dataIndex="name" key="name" />
        <Column
          title="Editar"
          render={(_, record: CompanyModel) => (
            <Space size="middle">
              <a onClick={() => setCompanyEdit(record)}>Editar</a>
            </Space>
          )}
        />
      </Table>
      <ModalEditCompany
        initialData={companyEdit}
        onOk={(data) => {
          const companiesUpdated = companies.map((item) => {
            return item.id === data.id ? data : item;
          });
          setCompanyEdit(undefined);
          setCompanies(companiesUpdated);
        }}
        onCancel={() => setCompanyEdit(undefined)}
      />
    </>
  );
});
