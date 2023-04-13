import { AssetModel } from "@/model";

export const getAssets = async () => {
  const response = await fetch(
    "https://my-json-server.typicode.com/tractian/fake-api/assets"
  );
  return (await response.json()) as Array<AssetModel>;
};
