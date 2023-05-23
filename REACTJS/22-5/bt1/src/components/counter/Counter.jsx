import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const StyleTitle = styled(Title)`
  color: chocolate;
`;

const Wrapper = styled.section`
  padding: 4em;
  background-color: ${props => props.count > 5 ? "tomato" : "green"};
`;

const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);


export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, loading: true };
  }

  // Khởi chạy sau constructor() và trước render()
  // *Lưu ý: không cập nhật state hoặc props vì lúc này chưa chạy hàm render nên giao diện sẽ không đổi
  // Gần như không dùng trong thực tế
  componentWillMount() {
    console.log("componentWillMount");
  }

  // Khởi chạy sau hàm render() có thể tương tác vs state, props ở đây
  // Thường dùng để gọi API hoặc xử lý tương tác thay đổi dữ liệu
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 4000);
  }

  // Giúp tăng hiệu năng và kiểm tra việc render có bị ảnh hưởng bởi state hoặc props hay không
  // Thường dùng để chặn hoặc validate dữ liệu
  shouldComponentUpdate = (nextState, nextProps) => {
    console.log("nextState", nextState);
    console.log("nextProps", nextProps);
    if (nextState.count > 5) {
      return false;
    }
    return true;
  };

  // Hàm cá nhân
  onDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  onIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };


  render() {
    console.log("Renderrrrr");
    return (
      <Wrapper count={this.state.count}>
        <Title>
          <div>
            {this.state.loading ? (
              <div>Loadingggg</div>
            ) : (
              <>
                console.log('aaaaa');
                <h1>Hello {this.props.name}</h1>
                <button onClick={() => this.onDecrease()}>-</button>
                <span>{this.state.count}</span>
                <button onClick={() => this.onIncrease()}>+</button>
              </>
            )}
          </div>
        </Title>
        <StyleTitle>Hello It's me</StyleTitle>
      </Wrapper>

      // <div>
      //   <h1>{this.props.name}</h1>
      //   <button onClick={() => this.onDecrease()}>-</button>
      //   <span>{this.state.count}</span>
      //   <button onClick={() => this.onIncrease()}>+</button>
      // </div>
    );
  }
}
