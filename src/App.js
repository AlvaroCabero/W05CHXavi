import { useContext } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Display from "./components/Display/Display";
import operacionContext from "./context/context";

function App() {
  const { displayData, add, subs } = useContext(operacionContext);
  console.log(displayData);

  return (
    <>
      <Display dato={displayData} />
      <Button text="-" actionOnClick={subs} />
      <Button text="+" actionOnClick={add} />
    </>
  );
}

export default App;
