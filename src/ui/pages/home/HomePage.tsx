import { memo, useEffect, useMemo, useState } from "react";
import { Col, Row } from "antd";
import { BarChart, BarChartSerieProps } from "@/ui";
import { AssetModel } from "@/model";
import { getAssets } from "@/service";
import { TitleSection } from "@/ui";

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

export const HomePage = () => {
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
    <>
      <TitleSection>Home</TitleSection>
      <Row>
        <Col span={12}>
          <BarChart title="Pontuação de Saúde" series={seriesHealthScore} />
        </Col>
        <Col span={12}>
          <BarChart
            title="Tempo de atividade total"
            series={seriesTotalUptime}
          />
        </Col>
        <Col span={12}>
          <BarChart
            title="Tempo total de coleta"
            series={seriesTotalCollectsUptime}
          />
        </Col>
      </Row>
    </>
  );
};
