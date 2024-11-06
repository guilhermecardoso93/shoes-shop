import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";

import "./App.css";

export function App() {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <Main />
    </>
  );
}
