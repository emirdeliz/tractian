import {
  AssetModel,
  AssetStatus,
  CompanyModel,
  UnitModel,
  UserModel,
} from "@/model";
import { ModalEdit, ModalEditBaseProps } from "@/ui/templates";
import { Input, InputNumber, Select } from "antd";
import { memo, useEffect, useMemo, useState } from "react";

interface ModalEditAssetProps
  extends Omit<ModalEditBaseProps<AssetModel>, "onConfirm"> {
  initialData?: AssetModel;
  companies: Array<CompanyModel>;
  units: Array<UnitModel>;
  users: Array<UserModel>;
  onOk: (asset: AssetModel) => void;
}

export const ModalEditAsset = memo((props: ModalEditAssetProps) => {
  const [healthscore, setHealthscore] = useState<number>();
  const [name, setName] = useState<string>();
  const [maxTemp, setMaxTemp] = useState<number>();
  const [power, setPower] = useState<number>();
  const [rpm, setRpm] = useState<number>();
  const [company, setCompany] = useState<number>();
  const [assignedUsers, setAssignedUsers] = useState<Array<number>>();
  const [unit, setUnit] = useState<number>();
  const [status, setStatus] = useState<string>();
  const { initialData } = props;

  useEffect(() => {
    setHealthscore(initialData?.healthscore);
    setName(initialData?.name);
    setMaxTemp(initialData?.specifications?.maxTemp);
    setPower(initialData?.specifications?.power);
    setRpm(initialData?.specifications?.rpm);
    setCompany(initialData?.companyId);
    setAssignedUsers(initialData?.assignedUserIds);
    setUnit(initialData?.unitId);
    setStatus(initialData?.status);
  }, [initialData]);

  const updateAsset = () => {
    const asset = {
      ...props.initialData,
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

  const fields = [
    {
      label: "Nome",
      span: 24,
      field: <Input value={name} onChange={(e) => setName(e.target.value)} />,
    },
    {
      label: "Pontuação de Saúde",
      span: 12,
      field: (
        <InputNumber
          value={healthscore}
          decimalSeparator=","
          onChange={(v) => setHealthscore(v || undefined)}
        />
      ),
    },
    {
      label: "Temperatura Máxima (C)",
      span: 12,
      field: (
        <InputNumber
          value={maxTemp}
          decimalSeparator=","
          onChange={(v) => setMaxTemp(v || undefined)}
        />
      ),
    },
    {
      label: "Potência em kWh",
      span: 12,
      field: (
        <InputNumber
          value={power}
          decimalSeparator=","
          onChange={(v) => setPower(v || undefined)}
        />
      ),
    },
    {
      label: "RPM",
      span: 12,
      field: (
        <InputNumber
          value={rpm}
          decimalSeparator=","
          onChange={(v) => setRpm(v || undefined)}
        />
      ),
    },
    {
      label: "Status",
      span: 24,
      field: (
        <Select
          value={status}
          options={[
            { value: AssetStatus.IN_ALERT, label: "Em alerta" },
            { value: AssetStatus.IN_OPERATION, label: "Em operação" },
            { value: AssetStatus.IN_DOWN_TIME, label: "Em parada" },
          ]}
          onChange={(e) => setStatus(e)}
        />
      ),
    },
    {
      label: "Empresa",
      span: 24,
      field: (
        <Select
          value={company}
          options={companiesOptions}
          onChange={(e) => setCompany(e)}
        />
      ),
    },
    {
      label: "Unidade",
      span: 24,
      field: (
        <Select
          value={unit}
          options={unitsOptions}
          onChange={(e) => setUnit(e)}
        />
      ),
    },
    {
      label: "Usuário Atribuídos",
      span: 24,
      field: (
        <Select
          mode="multiple"
          allowClear
          value={assignedUsers}
          options={usersOptions}
          onChange={(e) => setAssignedUsers(e)}
        />
      ),
    },
  ];

  return (
    <ModalEdit
      title="Editar Ativo"
      {...props}
      open={!!initialData}
      onConfirm={updateAsset}
    >
      {fields}
    </ModalEdit>
  );
});
