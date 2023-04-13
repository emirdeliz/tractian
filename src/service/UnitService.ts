import { UnitModel } from "@/model";

export const getUnits = async () => {
  const response = await fetch(
    "https://my-json-server.typicode.com/tractian/fake-api/units"
  );
  return (await response.json()) as Array<UnitModel>;
};
