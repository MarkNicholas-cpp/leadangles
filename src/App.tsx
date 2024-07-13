import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Pages/Home";
import Nav from "./Components/Nav";
import DiscussionBoard from "./Components/Pages/DiscussionBoard";
import { useEffect, useState } from "react";

function App() {
  const location = useLocation();
  const path = location.pathname;
  const [scrollEffect, setScrollEffect] = useState(true);
  useEffect(()=>{
    if (path != "/"){
      setScrollEffect(false);
    }
  },[path])
  return (
    <div className="font-angel">
      <Nav scrollEffect={scrollEffect} />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/discussion-board" Component={DiscussionBoard}></Route>
        </Routes>
      {/* <Home /> */}
      <Footer />
    </div>
  );
}
export default App;
