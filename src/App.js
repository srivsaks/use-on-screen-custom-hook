import "./styles.css";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useOnScreen } from "./useOnScreen";

export default function App() {
  const [refs, setRefs] = React.useState([]);
  const [myMap, setMyMap] = useState(new Map());

  useLayoutEffect(() => {
    setRefs((elRefs) =>
      Array(9)
        .fill()
        .map((_, i) => elRefs[i] || React.createRef())
    );
  }, []);

  const getMap = () => {};

  // this isnt scalable
  const { isIntersecting: isIntersecting1 } = useOnScreen({
    ref: refs[0]
  });

  return (
    <div className="App">
      {Array.from({ length: 9 }).map((_, index) => {
        return (
          <div class={`item item-${index + 1}`} ref={refs[index]}>
            Item {index}
          </div>
        );
      })}
    </div>
  );
}
