import { UnitModel } from "@/model";
import { getCompanies, getUnits } from "@/service";
import { TitleSection } from "@/ui";
import { Table } from "antd";
import { useEffect, useState } from "react";

const { Column } = Table;

const Units = () => {
  const [units, setUnits] = useState<Array<UnitModel>>([]);
  useEffect(() => {
    (async () => {
      const data = await getUnits();
      setUnits(data);
    })();
  }, []);

  return (
    <>
      <TitleSection>Unidades</TitleSection>
      <Table dataSource={units} size="small" pagination={false} rowKey="id">
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Nome" dataIndex="name" key="name" />
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

export default Units;
