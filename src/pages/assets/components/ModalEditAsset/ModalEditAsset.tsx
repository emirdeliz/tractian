import {
  AssetModel,
  AssetStatus,
  CompanyModel,
  UnitModel,
  UserModel,
} from "@/model";
import { Col, Form, Input, InputNumber, Modal, Row, Select } from "antd";
import { memo, useEffect, useMemo, useState } from "react";

interface ModalEditAssetProps {
  assetSelected?: AssetModel;
  companies: Array<CompanyModel>;
  units: Array<UnitModel>;
  users: Array<UserModel>;
  onOk: (asset: AssetModel) => void;
  onCancel: () => void;
}

const ModalEditAsset = memo((props: ModalEditAssetProps) => {
  const [healthscore, setHealthscore] = useState<number>();
  const [name, setName] = useState<string>();
  const [maxTemp, setMaxTemp] = useState<number>();
  const [power, setPower] = useState<number>();
  const [rpm, setRpm] = useState<number>();
  const [company, setCompany] = useState<number>();
  const [assignedUsers, setAssignedUsers] = useState<Array<number>>();
  const [unit, setUnit] = useState<number>();
  const [status, setStatus] = useState<string>();
  const { assetSelected } = props;

  useEffect(() => {
    setHealthscore(assetSelected?.healthscore);
    setName(assetSelected?.name);
    setMaxTemp(assetSelected?.specifications?.maxTemp);
    setPower(assetSelected?.specifications?.power);
    setRpm(assetSelected?.specifications?.rpm);
    setCompany(assetSelected?.companyId);
    setAssignedUsers(assetSelected?.assignedUserIds);
    setUnit(assetSelected?.unitId);
    setStatus(assetSelected?.status);
  }, [assetSelected]);

  const updateAsset = () => {
    const asset = {
      ...props.assetSelected,
      healthscore,
      name,
      specifications: {
        maxTemp,
        power,
        rpm,
      },
      companyId: company,
      assignedUserIds: assignedUsers,
      unitId: unit,
      status,
    } as AssetModel;
    props.onOk(asset);
  };

  const companiesOptions = useMemo(() => {
    return props.companies?.map((item) => ({
      label: item.name,
      value: item.id,
    }));
  }, [props.companies]);

  const unitsOptions = useMemo(() => {
    return props.units?.map((item) => ({
      label: item.name,
      value: item.id,
    }));
  }, [props.units]);

  const usersOptions = useMemo(() => {
    return props.users?.map((item) => ({
      label: item.name,
      value: item.id,
    }));
  }, [props.users]);

  return (
    <Modal
      title="Editar Ativo"
      {...props}
      open={!!assetSelected}
      onOk={updateAsset}
    >
      <Form layout="vertical">
        <Row>
          <Col span={24}>
            <Form.Item label="Nome">
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={14}>
            <Form.Item label="Pontuação de Saúde">
              <InputNumber
                value={healthscore}
                decimalSeparator=","
                onChange={(v) => setHealthscore(v || undefined)}
              />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="Temperatura Máxima (C)">
              <InputNumber
                value={maxTemp}
                decimalSeparator=","
                onChange={(v) => setMaxTemp(v || undefined)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={14}>
            <Form.Item label="Potência em kWh">
              <InputNumber
                value={power}
                decimalSeparator=","
                onChange={(v) => setPower(v || undefined)}
              />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="RPM">
              <InputNumber
                value={rpm}
                decimalSeparator=","
                onChange={(v) => setRpm(v || undefined)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <Form.Item label="Status">
              <Select
                value={status}
                options={[
                  { value: AssetStatus.IN_ALERT, label: "Em alerta" },
                  { value: AssetStatus.IN_OPERATION, label: "Em operação" },
                  { value: AssetStatus.IN_DOWN_TIME, label: "Em parada" },
                ]}
                onChange={(e) => setStatus(e)}
              />
            </Form.Item>
          </Col>
          <Col span={4} />
          <Col span={10}>
            <Form.Item label="Empresa">
              <Select
                value={company}
                options={companiesOptions}
                onChange={(e) => setCompany(e)}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Unidade">
          <Select
            value={unit}
            options={unitsOptions}
            onChange={(e) => setUnit(e)}
          />
        </Form.Item>
        <Form.Item label="Usuário Atribuídos">
          <Select
            mode="multiple"
            allowClear
            value={assignedUsers}
            options={usersOptions}
            onChange={(e) => setAssignedUsers(e)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
});

export default ModalEditAsset;
