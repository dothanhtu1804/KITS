import styled from "styled-components";
import React from 'react'
import SidebarListItem from "./SidebarListItem";
import 'font-awesome/css/font-awesome.min.css'
import { ToggleButton } from "components/button";

const SidebarListStyled = styled.div``;

const SidebarList = () => {
  return (
    <SidebarListStyled>
      <div className="body_list_sidebar">
        <SidebarListItem
          url={"/"}
          icon={"fa fa-th-large"}
          name={"Dashboard"}
        ></SidebarListItem>
        <SidebarListItem
          url={"/"}
          icon={"fa fa-shopping-bag"}
          name={"Market"}
        ></SidebarListItem>
        <SidebarListItem
          url={"/"}
          icon={"fa fa-balance-scale"}
          name={"Active Bids"}
        ></SidebarListItem>
      </div>
      <div className="title_list_sidebar">
        <h5>Profile</h5>
      </div>
      <div className="body_list_sidebar">
        <SidebarListItem
          url={"/"}
          icon={"fa fa-info-circle"}
          name={"My Portfolio"}
        ></SidebarListItem>
        <SidebarListItem
          url={"/"}
          icon={"fa fa-book"}
          name={"Wallet"}
        ></SidebarListItem>
        <SidebarListItem
          url={"/"}
          icon={"fa fa-heart"}
          name={"Favourites"}
        ></SidebarListItem>
        <SidebarListItem
          url={"/"}
          icon={"fa fa-clock-o"}
          name={"History"}
        ></SidebarListItem>
        <SidebarListItem
          url={"/"}
          icon={"fa fa-cog"}
          name={"Settings"}
        ></SidebarListItem>
      </div>
      <div className="title_list_sidebar">
        <h5>Profile</h5>
      </div>
      <div className="body_list_sidebar">
      <SidebarListItem
          url={"/"}
          icon={"fa fa-moon-o"}
          name={"Settings"}
        >{ToggleButton}</SidebarListItem>
      </div>
    </SidebarListStyled>
  );
};

export default SidebarList;
