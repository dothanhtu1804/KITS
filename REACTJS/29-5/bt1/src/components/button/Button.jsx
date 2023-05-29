import { Button, Space } from "antd";
import styled  from 'styled-components';

const ButtonComponentsStyled = styled.div`
    
`

const ButtonComponents = () => {
  return (
    <Space className="site-button-ghost-wrapper" wrap>
      <Button type="primary" ghost>
        Primary
      </Button>
      <Button ghost>Default</Button>
      <Button type="dashed" ghost>
        Dashed
      </Button>
      <Button type="primary" danger ghost>
        Danger
      </Button>
    </Space>
  );
};

export default ButtonComponents;
