import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  setTimeout(() => {
    setCount(count + 1);
  }, 1000);

  return <h4>You have used {count} seconds on this website ! </h4>;
}
export default Counter;
