import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";
import Group from "./Components/Pages/Group";
import Nav from "./Components/Nav";
import DiscussionBoard from "./Components/Pages/DiscussionBoard";
import About from "./Components/Pages/About";
import Referal from "./Components/Pages/Referal";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Updates from "./Components/Pages/Updates";

function App() {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/Login" || location.pathname === "/register";

  return (
    <div className="font-angel">
      <Nav />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/discussion-board" Component={DiscussionBoard}></Route>
        <Route path="/About" Component={About}></Route>
        <Route path="/Groups" Component={Group}></Route>
        <Route path="/Referal" Component={Referal}></Route>
        <Route path="/login" Component={Login}></Route>
        <Route path="/register" Component={Signup}></Route>
        <Route path="/Update" Component={Updates}></Route>
      </Routes>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
