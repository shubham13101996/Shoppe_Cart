import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import About from "./pages/About";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";

function  App(){
  return(
    <>
    <Routes>
       <Route path="/welcome" element={<Welcome />} />

   
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<PageNotFound />} />
    </Routes>
    
    </>
  )
}

export default App;