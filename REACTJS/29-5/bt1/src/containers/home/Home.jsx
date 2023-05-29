import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Row, theme } from "antd";
import { DashboardOutlined } from "@ant-design/icons";
import React from "react";
import logo from "assets/admin/images.png";
import styled from "styled-components";

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

// const ListMenu= ["Dashboard", "User", "Customer", "Orders", "Coupon"];

const ListMenu = [
  {
    id: 1,
    label: "Navigation One",
    key: "mail",
    icon: <DashboardOutlined />,
    children: [
      {
        label: "Option 1",
        key: "setting:1",
      },
      {
        label: "Option 2",
        key: "setting:1",
      },
      {
        label: "Option 3",
        key: "setting:1",
      },
    ],
  },
  {
    id: 1,
    label: "Navigation One",
    key: "mail",
    icon: <DashboardOutlined />,
    children: [
      {
        label: "Option 1",
        key: "setting:1",
      },
      {
        label: "Option 2",
        key: "setting:1",
      },
      {
        label: "Option 3",
        key: "setting:1",
      },
    ],
  },
  {
    id: 1,
    label: "Navigation One",
    key: "mail",
    icon: <DashboardOutlined />,
    children: [
      {
        label: "Option 1",
        key: "setting:1",
      },
      {
        label: "Option 2",
        key: "setting:1",
      },
      {
        label: "Option 3",
        key: "setting:1",
      },
    ],
  },
];

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: String(index + 1),
      icon: React.createElement(icon),
      label: `${ListMenu.splice(0,1)}` ,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);
const Home = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
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
        <Sider theme="dark" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            theme="dark"
            style={{
              height: "100%",
              borderRight: 0,
            }}
            // items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          ></Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default Home;
