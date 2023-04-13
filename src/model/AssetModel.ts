export enum AssetStatus {
  IN_ALERT = "inAlert",
  IN_OPERATION = "inOperation",
  IN_DOWN_TIME = "inDowntime",
}

export interface AssetMetricsModel {
  lastUptimeAt: string;
  totalCollectsUptime: number;
  totalUptime: number;
}

export interface AssetModel {
  id: number;
  healthscore: number;
  status: string;
  unitId: number;
  model: string;
  name: string;
  image: string;
  companyId: number;
  assignedUserIds: Array<number>;
  metrics: AssetMetricsModel;
  sensors: Array<number>;
  specifications: {
    maxTemp: number;
  };
}
