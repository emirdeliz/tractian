import Head from "next/head";
import { Col, Row } from "antd";
import { BarChart, BarChartSerieProps } from "@/ui/atoms";
import { memo, useEffect, useMemo, useState } from "react";
import { AssetModel } from "@/model";
import { getAssets } from "@/service";

const buildSeries = (
  assets: Array<AssetModel>,
  getData: (data: AssetModel) => any
) => {
  const data = assets.map((item) => {
    return getData(item);
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

const Home = () => {
  const [assets, setAssets] = useState<Array<AssetModel>>([]);
  useEffect(() => {
    (async () => {
      const assetsData = await getAssets();
      setAssets(assetsData);
    })();
  }, []);

  const seriesHealthScore = useMemo(() => {
    const series = buildSeries(assets, (data) => ({
      name: data.name,
      y: data.healthscore,
    }));
    return series;
  }, [assets]);

  // const seriesStatus = useMemo(() => {
  //   const series = buildSeries(assets, (data) => {
  //     // let status = 0;
  //     // // switch (data.status) {
  //     // //   case AssetStatus.IN_ALERT:
  //     // //     status = 1;
  //     // //     break;
  //     // //   case AssetStatus.IN_DOWN_TIME:
  //     // //     status = 2;
  //     // //     break;
  //     // //   case AssetStatus.IN_OPERATION:
  //     // //     status = 3;
  //     // //     break;
  //     // // }
  //     // return status;
  //     return [];
  //   });
  //   return series;
  // }, [assets]);

  const seriesTotalCollectsUptime = useMemo(() => {
    const series = buildSeries(assets, (data) => ({
      name: data.name,
      y: data.metrics.totalCollectsUptime,
    }));
    return series;
  }, [assets]);

  const seriesTotalUptime = useMemo(() => {
    const series = buildSeries(assets, (data) => ({
      name: data.name,
      y: data.metrics.totalUptime,
    }));
    return series;
  }, [assets]);

  return (
    <Row>
      <Col span={12}>
        <BarChart title="Pontuação de Saúde" series={seriesHealthScore} />
      </Col>
      {/* <Col span={12}>
        <LineChart title="Status" series={seriesStatus} />
      </Col> */}
      <Col span={12}>
        <BarChart title="Tempo de atividade total" series={seriesTotalUptime} />
      </Col>
      <Col span={12}>
        <BarChart
          title="Tempo total de coleta"
          series={seriesTotalCollectsUptime}
        />
      </Col>
    </Row>
  );
};

export default memo(Home);
