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

const style = {
  background: "#fff",
  padding: "20px 24px 8px",
};

const { Title, Text, Link } = Typography;

const Dashboard = () => {
  return (
    <>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
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
          <div style={style}></div>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
