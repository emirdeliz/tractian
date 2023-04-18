import { CompanyModel } from "@/model";
import { ModalEdit, ModalEditBaseProps } from "@/ui/templates";
import { Input } from "antd";
import { memo, useEffect, useState } from "react";

interface ModalEditCompanyProps
  extends Omit<ModalEditBaseProps<CompanyModel>, "onConfirm"> {
  onOk: (data: CompanyModel) => void;
}

export const ModalEditCompany = memo((props: ModalEditCompanyProps) => {
  const [name, setName] = useState<string>();
  const { initialData } = props;

  useEffect(() => {
    setName(initialData?.name);
  }, [initialData]);

  const updateData = () => {
    const update = {
      ...props.initialData,
      name,
    } as CompanyModel;
    props.onOk(update);
  };

  const fields = [
    {
      label: "Nome",
      span: 24,
      field: <Input value={name} onChange={(e) => setName(e.target.value)} />,
    },
  ];

  return (
    <ModalEdit<CompanyModel>
      title="Editar Empresa"
      {...props}
      open={!!initialData}
      onConfirm={updateData}
    >
      {fields}
    </ModalEdit>
  );
});
