import { Route, Routes } from "react-router-dom";
import "./App.css";
import HostYourHome from "./Component/HostYourHome/HostYourHome";
import Navbar from "./Component/Shared/Navbar";

function App() {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <div className="divider"></div>
      <Routes>
        <Route path="/hostyourhome" element={<HostYourHome></HostYourHome>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
