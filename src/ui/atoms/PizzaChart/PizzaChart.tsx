import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { memo } from "react";

export interface PizzaChartSerieDataProps {
  name: string;
  y: number;
}

export interface PizzaChartSerieProps {
  name: string;
  colorByPoint: boolean;
  data: Array<PizzaChartSerieDataProps>;
}

export interface PizzaChartProps {
  series: Array<PizzaChartSerieProps>;
  title: string;
}

const PizzaChartBase = ({ title, series }: PizzaChartProps) => {
  const options = {
    chart: {
      type: "pie",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    legend: {
      enabled: false,
    },
    title: {
      text: title,
    },
    series,
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export const PizzaChart = memo(PizzaChartBase);
