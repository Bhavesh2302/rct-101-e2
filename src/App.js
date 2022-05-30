import React from "react";
import Products from '../src/components/Products'
import { useState } from "react";

const App = () => {
  const [first, setfirst] = useState(true)
  return <div>{/* TODO: Code here */}

  <Products first={first} setfirst={setfirst}/>
  </div>;
};

export default App;
