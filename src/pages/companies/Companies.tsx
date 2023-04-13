import { CompanyModel } from "@/model";
import { getCompanies } from "@/service";
import { TitleSection } from "@/ui";
import { Table } from "antd";
import { useEffect, useState } from "react";

const { Column } = Table;

const Companies = () => {
  const [companies, setCompanies] = useState<Array<CompanyModel>>([]);
  useEffect(() => {
    (async () => {
      const data = await getCompanies();
      setCompanies(data);
    })();
  }, []);

  return (
    <>
      <TitleSection>Empresas</TitleSection>
      <Table dataSource={companies} size="small" pagination={false} rowKey="id">
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Nome" dataIndex="name" key="name" />
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

export default Companies;
