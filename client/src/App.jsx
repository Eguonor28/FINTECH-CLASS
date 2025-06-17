import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Expense from "./pages/Dashboard/Expense";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import Income from "./pages/Dashboard/Income";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Routes>
          <Route path="/expense" element={<Expense />} />
        </Routes>
        <Routes>
          <Route path="/income" element={<Income />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// npm i react-icons axios moment emoji-picker-react recharts react-hot-toast

// react-icons: for getting icons in react
// axios: for making api request to end point from a front end
// moment: for getting date and time
// Emoji picker: for getting emoji
// recharts: to get bar charts
// react-hot-toast: to get hot toast notifications
