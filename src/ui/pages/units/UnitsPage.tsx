import { useCompany, useUnit } from "@/hooks";
import { CompanyModel, UnitModel } from "@/model";
import { TitleSection } from "@/ui";
import { Space, Table } from "antd";
import { memo, useEffect, useState } from "react";
import { ModalEditUnit } from "./components";

const { Column } = Table;

export const UnitsPage = memo(() => {
  const [unitEdit, setUnitEdit] = useState<UnitModel>();
  const [units, setUnits] = useState<Array<UnitModel>>([]);
  const [companies, setCompanies] = useState<Array<CompanyModel>>([]);
  const { getUnits } = useUnit();
  const { getCompanies } = useCompany();

  useEffect(() => {
    (async () => {
      const unitsData = await getUnits();
      setUnits(unitsData);

      const companiesData = await getCompanies();
      setCompanies(companiesData);
    })();
  }, [getCompanies, getUnits]);

  return (
    <>
      <TitleSection>Unidades</TitleSection>
      <Table dataSource={units} size="small" pagination={false} rowKey="id">
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Nome" dataIndex="name" key="name" />
        <Column
          title="Empresa"
          render={(_, record: UnitModel) => (
            <>{companies.find((i) => i.id === record.companyId)?.name}</>
          )}
        />
        <Column
          title="Editar"
          render={(_, record: UnitModel) => (
            <Space size="middle">
              <a onClick={() => setUnitEdit(record)}>Editar</a>
            </Space>
          )}
        />
      </Table>
      <ModalEditUnit
        companies={companies}
        initialData={unitEdit}
        onOk={(data) => {
          const unitsUpdated = units.map((item) => {
            return item.id === data.id ? data : item;
          });
          setUnitEdit(undefined);
          setUnits(unitsUpdated);
        }}
        onCancel={() => setUnitEdit(undefined)}
      />
    </>
  );
});
