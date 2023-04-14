import { AssetModel, AssetStatus } from "@/model";
import { BarChartSerieProps } from "@/ui/atoms";

const buildSeries = (
  assets: Array<AssetModel> | Array<string>,
  getData: (data: AssetModel | string, index: number) => any
) => {
  const data = assets.map((item, index) => {
    return getData(item, index);
  });

  const series = [
    {
      name: " ",
      colorByPoint: true,
      data,
    },
  ] as Array<BarChartSerieProps>;

  return series;
};

const buildStatusTotal = (assets: Array<AssetModel>) => {
  const inAlertTotal = assets.filter(
    (item) => item.status === AssetStatus.IN_ALERT
  ).length;
  const inDownTimeTotal = assets.filter(
    (item) => item.status === AssetStatus.IN_DOWN_TIME
  ).length;
  const inOperationTotal = assets.filter(
    (item) => item.status === AssetStatus.IN_OPERATION
  ).length;

  return {
    inAlertTotal,
    inDownTimeTotal,
    inOperationTotal,
  };
};

const buildSeriesHealthScore = (assets: Array<AssetModel>) => {
  const series = buildSeries(assets, (data) => ({
    name: (data as AssetModel).name,
    y: (data as AssetModel).healthscore,
  }));
  return series;
};

const buildSeriesTotalCollectsUptime = (assets: Array<AssetModel>) => {
  const series = buildSeries(assets, (data) => ({
    name: (data as AssetModel).name,
    y: (data as AssetModel).metrics.totalCollectsUptime,
  }));
  return series;
};

const buildSeriesTotalUptime = (assets: Array<AssetModel>) => {
  const series = buildSeries(assets, (data) => ({
    name: (data as AssetModel).name,
    y: (data as AssetModel).metrics.totalUptime,
  }));
  return series;
};

const buildSeriesStatus = (assets: Array<AssetModel>) => {
  const { inAlertTotal, inDownTimeTotal, inOperationTotal } =
    buildStatusTotal(assets);

  const allStatus = ["Em Alerta", "Em Parada", "Em Operação"];
  const allStatusTotais = [inAlertTotal, inDownTimeTotal, inOperationTotal];
  const series = buildSeries(allStatus, (data, index) => ({
    name: data,
    y: allStatusTotais[index],
  }));
  return series;
};

export const buildAllSeries = (assets: Array<AssetModel>) => {
  const seriesHealthScore = buildSeriesHealthScore(assets);
  const seriesTotalCollectsUptime = buildSeriesTotalCollectsUptime(assets);
  const seriesTotalUptime = buildSeriesTotalUptime(assets);
  const seriesTotalStatus = buildSeriesStatus(assets);
  return {
    seriesHealthScore,
    seriesTotalCollectsUptime,
    seriesTotalUptime,
    seriesTotalStatus,
  };
};

export const formatterHealthScore = (_x: number, y: number) => {
  return `Saúde: é <b>${Math.round(y)}%</b>.`;
};

export const formatterTotalUptime = (_x: number, y: number) => {
  return `Tempo de: <b>${Math.round(y / 60)} minutos</b>.`;
};

export const formatterStatus = (x: number, y: number) => {
  return `Total: <b>${Math.round(y)}</b> ativos.`;
};
