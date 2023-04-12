import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { memo } from "react";

export interface BarChartSerieDataProps {
  name: string;
  y: number;
}

export interface BarChartSerieProps {
  name: string;
  colorByPoint: boolean;
  data: Array<BarChartSerieDataProps>;
}

export interface BarChartProps {
  series: Array<BarChartSerieProps>;
  title: string;
}

const BarChartBase = ({ title, series }: BarChartProps) => {
  const options = {
    chart: {
      type: "column",
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
};

export const BarChart = memo(BarChartBase);
