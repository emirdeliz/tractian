import { TitleSection } from "@/ui";
import { Space, Table, Tag } from "antd";
import { memo, useEffect, useState } from "react";
import {
  AssetModel,
  AssetStatus,
  CompanyModel,
  UnitModel,
  UserModel,
} from "@/model";
import { useAsset, useCompany, useUnit, useUser } from "@/hooks";
import ModalEditAsset from "./components/ModalEditAsset/ModalEditAsset";

const { Column } = Table;

const buildStatus = (record: AssetModel) => {
  let color;
  let tag;
  switch (record.status) {
    case AssetStatus.IN_ALERT:
      color = "yellow";
      tag = "Em alerta";
      break;
    case AssetStatus.IN_DOWN_TIME:
      color = "red";
      tag = "Em Parada";
      break;
    case AssetStatus.IN_OPERATION:
      color = "green";
      tag = "Em Operação";
      break;
  }

  return (
    <Tag color={color} key={tag}>
      {tag}
    </Tag>
  );
};

export const AssetsPage = memo(() => {
  const [assetEdit, setAssetEdit] = useState<AssetModel>();
  const [assets, setAssets] = useState<Array<AssetModel>>([]);
  const [companies, setCompanies] = useState<Array<CompanyModel>>([]);
  const [units, setUnits] = useState<Array<UnitModel>>([]);
  const [users, setUsers] = useState<Array<UserModel>>([]);

  const { getAssets } = useAsset();
  const { getCompanies } = useCompany();
  const { getUnits } = useUnit();
  const { getUsers } = useUser();

  useEffect(() => {
    (async () => {
      const assetsData = await getAssets();
      const companiesData = await getCompanies();
      const unitsData = await getUnits();
      const usersData = await getUsers();

      setAssets(assetsData);
      setCompanies(companiesData);
      setUnits(unitsData);
      setUsers(usersData);
    })();
  }, [getAssets, getCompanies, getUnits, getUsers]);

  return (
    <>
      <TitleSection>Ativos</TitleSection>
      <Table dataSource={assets} size="small" pagination={false} rowKey="id">
        <Column title="Id" dataIndex="id" key="id" />
        <Column title="Nome" dataIndex="name" key="name" />
        <Column
          title="Pontuação de Saúde"
          dataIndex="healthscore"
          key="healthscore"
        />
        <Column
          title="Temperatura Máxima em Celsius"
          render={(_, record: AssetModel) => (
            <>{record.specifications.maxTemp}</>
          )}
        />
        <Column
          title="Potência em kWh"
          render={(_, record: AssetModel) => <>{record.specifications.power}</>}
        />
        <Column
          title="RPM"
          render={(_, record: AssetModel) => <>{record.specifications.rpm}</>}
        />
        <Column
          title="Status"
          render={(_, record: AssetModel) => buildStatus(record)}
        />
        <Column
          title="Empresa"
          render={(_, record: AssetModel) => (
            <>{companies.find((i) => i.id === record.companyId)?.name}</>
          )}
        />
        <Column
          title="Unidade"
          render={(_, record: AssetModel) => (
            <>{units.find((i) => i.id === record.unitId)?.name}</>
          )}
        />
        <Column
          title="Usuário Atribuídos"
          render={(_, record: AssetModel) =>
            record.assignedUserIds?.map((i) => (
              <Tag key={i}>{users.find((j) => j.id === i)?.name}</Tag>
            ))
          }
        />
        <Column
          title="Editar"
          render={(_, record: AssetModel) => (
            <Space size="middle">
              <a onClick={() => setAssetEdit(record)}>Editar</a>
            </Space>
          )}
        />
      </Table>
      <ModalEditAsset
        companies={companies}
        units={units}
        users={users}
        assetSelected={assetEdit}
        onOk={(asset) => {
          const assetsUpdated = assets.map((item) => {
            return item.id === asset.id ? asset : item;
          });
          setAssetEdit(undefined);
          setAssets(assetsUpdated);
        }}
        onCancel={() => setAssetEdit(undefined)}
      />
    </>
  );
});
