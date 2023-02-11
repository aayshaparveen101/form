import "./App.css";
import Inputbox from './components/Inputbox'
import Temp from "./components/Temp";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<SignIn/>}/>
      <Route  path="/SignUp" element={<SignUp/>}/>

    </Routes>
    </BrowserRouter>
    {/* <Temp /> */}
    {/* <Inputbox /> */}
    {/* <SignUp /> */}
    {/* <SignIn/> */}
    {/* <Footer/> */}
    </>
  
);
}

