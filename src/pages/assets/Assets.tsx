import { TitleSection } from "@/ui";
import { Space, Table } from "antd";
import { memo, useEffect, useId, useState } from "react";
import ModalEditAsset from "./components/ModalEditAsset/ModalEditAsset";
import { AssetModel } from "@/model";
import { getAssets } from "@/service";

const { Column } = Table;

const Assets = () => {
  const [assetEdit, setAssetEdit] = useState<AssetModel>();
  const [assets, setAssets] = useState<Array<AssetModel>>([]);
  useEffect(() => {
    (async () => {
      const data = await getAssets();
      setAssets(data);
    })();
  }, []);

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
        <Column title="Status" dataIndex="status" key="status" />
        <Column
          title="Editar"
          dataIndex="edit"
          key="edit"
          render={(_, record) => (
            <Space size="middle">
              <a onClick={() => setAssetEdit(record as AssetModel)}>Edit</a>
            </Space>
          )}
        />
      </Table>
      <ModalEditAsset
        open={!!assetEdit}
        onOk={() => setAssetEdit(undefined)}
        onCancel={() => setAssetEdit(undefined)}
      />
    </>
  );
};

export default memo(Assets);
