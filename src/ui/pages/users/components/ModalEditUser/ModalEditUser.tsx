import { CompanyModel, UnitModel, UserModel } from "@/model";
import { ModalEdit, ModalEditBaseProps } from "@/ui/templates";
import { Input, Select } from "antd";
import { memo, useEffect, useMemo, useState } from "react";

interface ModalEditUserProps extends ModalEditBaseProps<UserModel> {
  companies: Array<CompanyModel>;
  units: Array<UnitModel>;
}

export const ModalEditUser = memo((props: ModalEditUserProps) => {
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();
  const [company, setCompany] = useState<number>();
  const [unit, setUnit] = useState<number>();
  const { initialData } = props;

  useEffect(() => {
    setEmail(initialData?.email);
    setName(initialData?.name);
    setCompany(initialData?.companyId);
    setUnit(initialData?.unitId);
  }, [initialData]);

  const updateData = () => {
    const update = {
      ...props.initialData,
      name,
      email,
      companyId: company,
      unitId: unit,
    } as UserModel;
    props.onOk(update);
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

  const fields = [
    {
      label: "Nome",
      span: 24,
      field: <Input value={name} onChange={(e) => setName(e.target.value)} />,
    },
    {
      label: "E-mail",
      span: 24,
      field: <Input value={email} onChange={(e) => setEmail(e.target.value)} />,
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
      label: "Unit",
      span: 24,
      field: (
        <Select
          value={unit}
          options={unitsOptions}
          onChange={(e) => setUnit(e)}
        />
      ),
    },
  ];

  return (
    <ModalEdit<UnitModel>
      title="Editar Usuário"
      {...props}
      open={!!initialData}
      onOk={updateData}
    >
      {fields}
    </ModalEdit>
  );
});
