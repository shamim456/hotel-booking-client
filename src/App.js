import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Shared/Navbar";

function App() {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <div className="divider"></div>
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
