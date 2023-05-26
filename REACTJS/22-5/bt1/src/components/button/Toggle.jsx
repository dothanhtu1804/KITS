import { useState } from "react";
import styled from "styled-components";

const ToggleButtonStyled = styled.div`
  box-sizing: border-box;
  
  .toggle_button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  
  .checkbox {
    opacity: 0; 
    position: absolute; 
  }

  .label {
    background-color: #111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    padding: 5px;
    position: relative;
    height: 21px;
    width: 50px;
  }

  .ball {
    background-color: #fff;
    border-radius: 50px;
    position: absolute;
    top: 5px;
    left: 2px;
    height: 22px;
    width: 22px;
    transition: transform 0.3s linear;
    transform: translateX(0);
  }

  .dark-mode .ball {
    transform: translateX(32px);
  }

  .fa-moon-o {
    color: #f1c40f;
  }

  .fa-sun-o {
    color: #f1c40f;
  }
`;

const ToggleButton = ({ url, icon, name }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ToggleButtonStyled>
      <div className={`toggle_button ${isDarkMode ? "dark-mode" : ""}`}>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onChange={(event) => {
            console.log(event.target.checked);
            setIsDarkMode(event.target.checked);
          }}
        />
        <label htmlFor="checkbox" className="label">
          <i className="fa fa-sun-o"></i>
          <i className="fa fa-moon-o"></i>
          <div className="ball"></div>
        </label>
      </div>
    </ToggleButtonStyled>
  );
};

export default ToggleButton;
