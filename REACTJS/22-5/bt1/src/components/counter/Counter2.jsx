import { useState, useEffect }from "react";

export const Counter2 = ({name}) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading]  = useState(true);

  useEffect(() => {
    console.log("useEffect");
    setTimeout(() => {
      setLoading("aaa")
    },3000);
  }, [loading, count]);

  const onDecrease = () => {
    setCount(count - 1);
  };

  const onIncrease = () => {
    setCount(count + 1);
  };
  console.log("re-renderrr");
  return(
    <div>
      {loading === true ? (
        <div>Loadinggg2</div>
      ) : (
        <>

          <h1>Hello {name}</h1>
          <button
            onClick={() => onDecrease()}
            style={{ width: 60, height: 30 }}
          >
            -
          </button>
          <span style={{ marginLeft: 30, marginRight: 30 }}>{count}</span>
          <button
            onClick={() => onIncrease()}
            style={{ width: 60, height: 30 }}
          >
            +
          </button>
        </>
      )}
    </div>
  )
};

// export class Counter2 extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   onDecrease = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

//   onIncrease = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.onDecrease()}>-</button>
//         <span>{this.state.count}</span>
//         <button onClick={() => this.onIncrease()}>+</button>
//       </div>
//     );
//   }
// }
