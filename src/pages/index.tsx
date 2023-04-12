import Head from "next/head";
import { Col, Row } from "antd";
import { BarChart } from "@/ui/atoms";
import { memo } from "react";

const series = [
  {
    name: " ",
    colorByPoint: true,
    data: [
      {
        name: "Chrome",

        y: 21.06,
      },
      {
        name: "Chrome",
        y: 19.84,
      },
      {
        name: "Firefox",
        y: 4.18,
      },
      {
        name: "Edge",
        y: 4.12,
      },
      {
        name: "Opera",
        y: 2.33,
      },
    ],
  },
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Tractian Challenge</title>
        <meta name="description" content="Tractian Challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Row>
        <Col span={12}>
          <BarChart title="Health Score" series={series} />
        </Col>
        <Col span={12}>
          <BarChart title="Status" series={series} />
        </Col>
        <Col span={12}>
          <BarChart title="Total Uptime" series={series} />
        </Col>
        <Col span={12}>
          <BarChart title="Total Collects Uptime" series={series} />
        </Col>
      </Row>
    </>
  );
};

export default memo(Home);
