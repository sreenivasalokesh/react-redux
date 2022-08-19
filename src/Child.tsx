import {
  MutableRefObject,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

export const Child = () => {
  const valRef = useRef<any>();
  const [state, setState] = useState(0);

  useEffect(() => {
    if (valRef && valRef.current) {
      console.log("render everytime: ", valRef.current.value);
    }
  });

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "INC":
        return { value: state.value + 1 };
      case "DEC":
        return { value: state.value - 1 };
      default:
        return { value: state.value + 1 };
    }
  };

  const [data, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <>
      Child 123 <input type="text" value={data.value} ref={valRef} />
      <button onClick={() => dispatch({ type: "INC" })}>INC</button>
      <button onClick={() => dispatch({ type: "DEC" })}>DEC</button>
      <button onClick={() => setState(state + 1)}>INCR</button>
      {state}
      <button onClick={() => setState(state - 1)}>DECR</button>
    </>
  );
};







