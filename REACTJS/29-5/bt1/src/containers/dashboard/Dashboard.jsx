import {
  Switch,
  Breadcrumb,
  Layout,
  Menu,
  Row,
  theme,
  Col,
  Divider,
  Typography,
  Card,
  Statistic,
  Space,
  Tabs,
} from "antd";
import {
  DashboardOutlined,
  UsergroupAddOutlined,
  AppstoreOutlined,
  BarsOutlined,
  AccountBookOutlined,
  UserOutlined,
  InfoCircleOutlined,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
import { Line, RadialBar } from "@ant-design/plots";
import ReactDOM from 'react-dom'; 

const style = {
  background: "#fff",
  padding: "20px",
  margin: "10px",
};

const { Title, Text, Link } = Typography;

const Dashboard = () => {
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 20 },
  ];

  const configChartLine = {
    data,
    padding: "auto",
    xField: "year",
    yField: "value",
    xAxis: {
      tickCount: 5,
    },
    smooth: true,
    lineStyle: {
      stroke: "l(0) 0:#9747FF  1:#14F4C9",
      lineWidth: 5,
      strokeOpacity: 0.7,
      shadowColor: "black",
      shadowBlur: 10,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
      cursor: "pointer",
    },
  };

  const data2 = [
    {
      name: "Doanh số",
      value: 75,
      color: "#1890ff",
    },
    {
      name: "Chuyển đổi",
      value: 87,
      color: "#2fc25b",
    },
    {
      name: "Clicks",
      value: 65,
      color: "#facc14",
    },
    {
      name: "Phiên",
      value: 82,
      color: "#223273",
    },
  ];

  const data3 = [
    {
      name: 'activity1',
      percent: 2370,
      color: '#1ad5de',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/ck11Y6aRrz/shangjiantou.png',
    },
    {
      name: 'activity2',
      percent: 800,
      color: '#a0ff03',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/zY2JB7hhrO/shuangjiantou.png',
    },
    {
      name: 'activity3',
      percent: 650,
      color: '#e90b3a',
      icon: 'https://gw.alipayobjects.com/zos/antfincdn/%24qBxSxdK05/jiantou.png',
    },
  ];

  const configRadialBar = {
    width: 400,
    height: 244,
    data,
    xField: 'name',
    yField: 'percent',
    // maxAngle: 90, //最大旋转角度,
    radius: 0.8,
    innerRadius: 0.2,
    xAxis: false,
    theme: 'dark',
    barBackground: {
      style: {
        fill: 'rgba(255,255,255,0.45)',
        
      },
    },
    minBarWidth: 25,
    maxBarWidth: 25,
    colorField: 'name',
    color: ({ name }) => {
      return data.find((d) => d.name === name).color;
    },
  };

  return (
    <>
      <Row>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <Row justify="space-between" align="middle">
              <Text type="secondary">Tổng doanh số</Text>
              <InfoCircleOutlined />
            </Row>
            <Row>
              <Text style={{ fontSize: "30px" }}>¥ 126,560</Text>
            </Row>
            <Row>
              <Space size={16} style={{ marginLeft: "8px" }}>
                <Statistic
                  value={"12% hàng ngày"}
                  precision={2}
                  valueStyle={{ color: "#3f8600", fontSize: "14px" }}
                  prefix={<ArrowUpOutlined />}
                  gutter={[16]}
                />
                <Statistic
                  value={"11% hàng ngày"}
                  precision={2}
                  valueStyle={{ color: "#cf1322", fontSize: "14px" }}
                  prefix={<ArrowDownOutlined />}
                />
              </Space>
            </Row>
            <Divider style={{ margin: "8px 0" }} />
            <Row>
              <Space size={8}>
                <Text>Doanh thu hàng ngày</Text>
                <Text>￥12,423</Text>
              </Space>
            </Row>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
      <Row>
        <Col className="gutter-row" span={24}>
          <div style={style}>
            <Title>Token Price</Title>
            <Line {...configChartLine} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="gutter-row" span={8}>
          <div style={style}>
            <Title>Money Allocation</Title>
            <RadialBar {...configRadialBar} />
          </div>
        </Col>
        <Col className="gutter-row" span={16}>
          <div style={style}></div>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
