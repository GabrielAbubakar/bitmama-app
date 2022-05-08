import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import LoggedIn from './pages/LoggedIn';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<LoggedIn />} />
    </Routes>
  );
}

export default App;
