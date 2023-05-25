import styled from "styled-components";

const ToggleButtonStyled = styled.div`
`


const ToggleButton = ({ url, icon, name }) => {
    return (
      <ToggleButtonStyled>
        <input type="checkbox" className="checkbox" id="checkbox"/>
        <label htmlFor="checkbox" className="label">
            <i class="fa fa-sun-o"></i>
        </label>

      </ToggleButtonStyled>
    );
  };
  
  export default ToggleButton;