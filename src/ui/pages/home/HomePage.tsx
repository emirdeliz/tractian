import { memo, useEffect, useMemo, useState } from "react";
import { Col, Row } from "antd";
import { BarChart } from "@/ui";
import { AssetModel } from "@/model";
import { TitleSection } from "@/ui";
import { useAsset } from "@/hooks";
import {
  buildAllSeries,
  formatterHealthScore,
  formatterStatus,
  formatterTotalUptime,
} from "./HomePage.controller";

export const HomePage = memo(() => {
  const [assets, setAssets] = useState<Array<AssetModel>>([]);
  const { getAssets } = useAsset();
  useEffect(() => {
    (async () => {
      const assetsData = await getAssets();
      setAssets(assetsData);
    })();
  }, [getAssets]);

  const {
    seriesHealthScore,
    seriesTotalCollectsUptime,
    seriesTotalUptime,
    seriesTotalStatus,
  } = useMemo(() => {
    const series = buildAllSeries(assets);
    return series;
  }, [assets]);

  return (
    <>
      <TitleSection>Home</TitleSection>
      <Row>
        <Col span={12}>
          <BarChart
            title="Pontuação de Saúde"
            series={seriesHealthScore}
            formatter={formatterHealthScore}
          />
        </Col>
        <Col span={12}>
          <BarChart
            title="Tempo de atividade total"
            series={seriesTotalUptime}
            formatter={formatterTotalUptime}
          />
        </Col>
        <Col span={12}>
          <BarChart
            title="Tempo total de coleta"
            series={seriesTotalCollectsUptime}
            formatter={formatterTotalUptime}
          />
        </Col>
        <Col span={12}>
          <BarChart
            title="Status"
            series={seriesTotalStatus}
            formatter={formatterStatus}
          />
        </Col>
      </Row>
    </>
  );
});
