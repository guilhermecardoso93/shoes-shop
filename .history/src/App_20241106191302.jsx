import { Navbar } from "./components/Navbar";

import "./App.css";
import { Main } from "./components/Main";

export function App() {
  return (
    <>
      <div className="navbar-container">
        <Navbar />
      </div>
      <Main/>
    </>
  );
}
