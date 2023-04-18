import { CompanyModel, UnitModel } from "@/model";
import { ModalEdit, ModalEditBaseProps } from "@/ui/templates";
import { Input, Select } from "antd";
import { memo, useEffect, useMemo, useState } from "react";

interface ModalEditUnitProps
  extends Omit<ModalEditBaseProps<UnitModel>, "onConfirm"> {
  companies: Array<CompanyModel>;
  onOk: (data: UnitModel) => void;
}

export const ModalEditUnit = memo((props: ModalEditUnitProps) => {
  const [name, setName] = useState<string>();
  const [company, setCompany] = useState<number>();
  const { initialData } = props;

  useEffect(() => {
    setName(initialData?.name);
    setCompany(initialData?.companyId);
  }, [initialData]);

  const updateData = () => {
    const update = {
      ...props.initialData,
      name,
      companyId: company,
    } as UnitModel;
    props.onOk(update);
  };

  const companiesOptions = useMemo(() => {
    return props.companies?.map((item) => ({
      label: item.name,
      value: item.id,
    }));
  }, [props.companies]);

  const fields = [
    {
      label: "Nome",
      span: 24,
      field: <Input value={name} onChange={(e) => setName(e.target.value)} />,
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
  ];

  return (
    <ModalEdit<UnitModel>
      title="Editar Unidade"
      {...props}
      open={!!initialData}
      onConfirm={updateData}
    >
      {fields}
    </ModalEdit>
  );
});
