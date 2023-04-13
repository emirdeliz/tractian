import { CompanyModel, UnitModel, UserModel } from "@/model";
import { NumericInput } from "@/ui/atoms";
import { Form, Input, Modal, Select } from "antd";
import { useState } from "react";

interface ModalEditAssetProps {
  open: boolean;
  companies: Array<CompanyModel>;
  units: Array<UnitModel>;
  users: Array<UserModel>;
  onOk: () => void;
  onCancel: () => void;
}

const ModalEditAsset = (props: ModalEditAssetProps) => {
  const [healthScore, setHealthScore] = useState<number>();
  const [name, setName] = useState<string>();
  const [maxTemp, setMaxTemp] = useState<number>();
  const [power, setPower] = useState<number>();
  const [rpm, setRpm] = useState<number>();
  const [company, setCompany] = useState<number>();
  const [assignedUsers, setAssignedUsers] = useState<Array<number>>();
  const [unit, setUnit] = useState<number>();
  const [status, setStatus] = useState<string>();

  return (
    <Modal title="Editar Ativo" {...props}>
      <Form layout="vertical">
        <Form.Item
          label="Nome"
          name="name"
          rules={[{ required: true, message: "Favor informe um nome" }]}
        >
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Pontuação de Saúde"
          name="healthscore"
          rules={[
            { required: true, message: "Favor informe a Pontuação de Saúde" },
          ]}
        >
          <NumericInput
            value={healthScore}
            onChange={(v) => setHealthScore(v)}
          />
        </Form.Item>
        <Form.Item
          label="Temperatura Máxima em Celsius"
          name="maxTemp"
          rules={[
            {
              required: true,
              message: "Favor informe a Temperatura Máxima em Celsius",
            },
          ]}
        >
          <NumericInput value={maxTemp} onChange={(v) => setMaxTemp(v)} />
        </Form.Item>
        <Form.Item
          label="Potência em kWh"
          name="power"
          rules={[
            {
              required: true,
              message: "Favor informe a Potência em kWh",
            },
          ]}
        >
          <NumericInput value={power} onChange={(v) => setPower(v)} />
        </Form.Item>
        <Form.Item
          label="RPM"
          name="rpm"
          rules={[
            {
              required: true,
              message: "Favor informe o RPM",
            },
          ]}
        >
          <NumericInput value={rpm} onChange={(v) => setRpm(v)} />
        </Form.Item>
        <Form.Item
          label="Status"
          name="status"
          rules={[
            {
              required: true,
              message: "Favor informe o status",
            },
          ]}
        >
          <Select
            value={status}
            options={[
              { value: "inAlert", label: "Em Alerta" },
              {
                value: "inOperation",
                label: "Em operação",
              },
              { value: "inDowntime", label: "Inativo" },
            ]}
            onChange={(e) => setStatus(e)}
          />
        </Form.Item>
        <Form.Item
          label="Empresa"
          name="company"
          rules={[
            {
              required: true,
              message: "Favor informe a empresa",
            },
          ]}
        >
          <Select
            value={company}
            options={props.companies}
            onChange={(e) => setCompany(e)}
          />
        </Form.Item>
        <Form.Item
          label="Unidade"
          name="unit"
          rules={[
            {
              required: true,
              message: "Favor informe a unidade",
            },
          ]}
        >
          <Select
            value={unit}
            options={props.units}
            onChange={(e) => setUnit(e)}
          />
        </Form.Item>
        <Form.Item
          label="Usuário Atribuídos"
          name="assignedUsers"
          rules={[
            {
              required: true,
              message: "Favor informe o usuários atribuídos",
            },
          ]}
        >
          <Select
            mode="multiple"
            allowClear
            options={props.users}
            onChange={(e) => setAssignedUsers(e)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

[
  { value: "inAlert", label: "Em Alerta" },
  {
    value: "inOperation",
    label: "Em operação",
  },
  { value: "inDowntime", label: "Inativo" },
];

export default ModalEditAsset;
