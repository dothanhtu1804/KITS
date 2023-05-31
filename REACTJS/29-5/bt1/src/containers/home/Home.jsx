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
import React from "react";
import logo from "assets/admin/images.png";
import styled from "styled-components";
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
import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "containers/dashboard";
import { navigate } from "@reach/router";

const LogoStyled = styled.div`
  .demo-logo {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .demo-logo img {
    height: 85%;
    object-fit: contain;
    padding-left: 20px;
  }

  .demo-logo h1 {
    color: #fff;
  }
`;

const { Header, Content, Sider } = Layout;
const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const { Title, Text, Link } = Typography;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Dashboard", "dashboard", <DashboardOutlined />, [
    getItem("Analysis","1"),
    getItem("Monitor", "2"),
    getItem("Workplace", "3"),
  ]),
  getItem("User", "user", <UserOutlined />, [
    getItem("List User", "list-user"),
    getItem("Modify User", "modify"),
  ]),
  getItem("Customers", "sub3", <UsergroupAddOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("Product", "sub4", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("Orders", "sub5", <BarsOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("Coupon", "sub6", <AccountBookOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

const onChange = (key) => {
  console.log(key);
};
const items2 = [
  {
    key: "1",
    label: `Tab 1`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: "2",
    label: `Tab 2`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: `Tab 3`,
    children: `Content of Tab Pane 3`,
  },
];

const Home = ({children}) => {
  const [theme, setTheme] = useState("dark");
  const [current, setCurrent] = useState("1");
  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  const navigate = useNavigate();

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 0,
        }}
      >
        <LogoStyled>
          <div className="demo-logo">
            <img src={logo} alt="" />
            <h1>Ant Design Pro</h1>
          </div>
        </LogoStyled>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        >
          <img
            src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/293031808_1093376614929305_5259707269299702059_n.jpg?stp=cp6_dst-jpg_p160x160&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=iHAu6KKp2cEAX8jGtfD&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfBS3vV4yZVz-K7kH1qYA0cTL12g5-e-5C89QVl3K6aupA&oe=6478B8B7"
            alt=""
          />
        </Menu>
      </Header>
      <Layout>
        <Sider theme="dark">
          <Switch
            checked={theme === "dark"}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
          <br />
          <br />
          <Menu
            theme={theme}
            onClick={(e) => navigate(`/${e.keyPath[1]}/${e.keyPath[0]}`)}
            defaultOpenKeys={["sub1"]}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
            {/* <>
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
            </> */}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Home;
