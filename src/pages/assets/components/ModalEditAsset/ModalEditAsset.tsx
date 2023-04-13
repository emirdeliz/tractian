import { NumericInput } from "@/ui/atoms";
import { Form, Input, Modal, Select } from "antd";
import { useState } from "react";

interface ModalEditAssetProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
}

const ModalEditAsset = (props: ModalEditAssetProps) => {
  const [healthScore, setHealthScore] = useState<number>();
  const [status, setStatus] = useState<string>();

  return (
    <Modal title="Editar Ativo" {...props}>
      <Form layout="vertical">
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
        <Form.Item label="Status" name="status">
          <Select
            defaultValue="inAlert"
            style={{ width: 120 }}
            onChange={(e) => setStatus(e)}
            options={[
              { value: "inAlert", label: "Em Alerta" },
              {
                value: "inOperation",
                label: "Em operação",
              },
              { value: "inDowntime", label: "Inativo" },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalEditAsset;
