import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { memo } from "react";

export interface LineChartSerieProps {
  name: string;
  colorByPoint: boolean;
  data: Array<any>;
}

export interface LineChartProps {
  series: Array<LineChartSerieProps>;
  title: string;
}

export const LineChart = memo(({ title, series }: LineChartProps) => {
  const options = {
    chart: {
      type: "spline",
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Valores",
      },
    },
    title: {
      text: title,
    },
    series,
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
});
