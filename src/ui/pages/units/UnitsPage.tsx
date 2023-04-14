import { useUnit } from "@/hooks";
import { UnitModel } from "@/model";
import { TitleSection } from "@/ui";
import { Table } from "antd";
import { memo, useEffect, useState } from "react";

const { Column } = Table;

export const UnitsPage = memo(() => {
  const [units, setUnits] = useState<Array<UnitModel>>([]);
  const { getUnits } = useUnit();
  useEffect(() => {
    (async () => {
      const data = await getUnits();
      setUnits(data);
    })();
  }, [getUnits]);

  return (
    <>
      <TitleSection>Unidades</TitleSection>
      <Table dataSource={units} size="small" pagination={false} rowKey="id">
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Nome" dataIndex="name" key="name" />
        <Column title="Empresa" dataIndex="companyId" key="companyId" />
      </Table>
    </>
  );
});
