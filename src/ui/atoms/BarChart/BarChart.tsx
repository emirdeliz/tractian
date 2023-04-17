import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { memo, useEffect, useRef } from "react";

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
  const chartRef = useRef<any>(null);
  useEffect(() => {
    setTimeout(() => {
      chartRef.current?.chart.reflow();
    }, 300);
  }, []);

  return (
    <HighchartsReact ref={chartRef} highcharts={Highcharts} options={options} />
  );
});
