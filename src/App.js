import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignIn/SignUp";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/sign-In" element={<SignIn />}></Route>
        <Route path="/sign-Up" element={<SignUp />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
