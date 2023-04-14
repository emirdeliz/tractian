import { useCompany } from "@/hooks";
import { CompanyModel } from "@/model";
import { TitleSection } from "@/ui";
import { Table } from "antd";
import { memo, useEffect, useState } from "react";

const { Column } = Table;

export const CompaniesPage = memo(() => {
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
      </Table>
    </>
  );
});
