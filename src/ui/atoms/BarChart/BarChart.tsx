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
  formatter?: (x: number, y: number) => string;
}

export const BarChart = memo(({ title, series, formatter }: BarChartProps) => {
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
    tooltip: {
      formatter: function () {
        const self = this as any;
        return formatter ? formatter(self.x, self.y) : self.y;
      },
    },
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
});
