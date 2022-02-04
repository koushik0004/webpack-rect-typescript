import { CounterComponent } from "./components";
import "./styles.css";
import IMAGE from "./logo512.png";
import LOGO from "./logo.svg";

export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template - {process.env.name}</h1>
      <img src={IMAGE} alt="React Logo" width="300" height="300" />
      <img src={LOGO} alt="SVG logo" width="300" />
      <CounterComponent />
    </>
  );
};
