import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, loading: true };
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 4000);
  }

  onDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  onIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Renderrrrr");
    return (
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
      // <div>
      //   <h1>{this.props.name}</h1>
      //   <button onClick={() => this.onDecrease()}>-</button>
      //   <span>{this.state.count}</span>
      //   <button onClick={() => this.onIncrease()}>+</button>
      // </div>
    );
  }
}
