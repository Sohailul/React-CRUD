import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AddData from "./components/AddData/AddData";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/add" element={<AddData />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
