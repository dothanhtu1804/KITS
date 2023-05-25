import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import SidebarListItem from "./SidebarListItem";
import dashboard from "../../assets/sidebar/dashboard.svg";
// import SidebarListItem from "./SidebarListItem";

const SidebarListStyled = styled.div``;
// const SidebarListItemStyled = styled.div``;
// const SidebarListItem = ({ url, icon, name }) => {
//   return (
//     <SidebarListItemStyled url={url} icon={icon} name={name}>
//       <NavLink to={url}>
//         <FontAwesomeIcon icon={icon} />
//         {name}
//       </NavLink>
//     </SidebarListItemStyled>
//   );
// };

const SidebarList = () => {
  return (
    <SidebarListStyled>
      <div className="title_list_sidebar">
        <h5>Profile</h5>
      </div>
      <div className="body_list_sidebar">
        <SidebarListItem
          url={"/"}
          url_image={dashboard}
          name={"Dashboard"}
        ></SidebarListItem>
        <SidebarListItem
          url={"/"}
          url_image={dashboard}
          name={"Dashboard"}
        ></SidebarListItem>
        <SidebarListItem
          url={"/"}
          url_image={dashboard}
          name={"Dashboard"}
        ></SidebarListItem>
      </div>
    </SidebarListStyled>
  );
};

export default SidebarList;
