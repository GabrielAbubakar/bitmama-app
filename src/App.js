import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import LoggedIn from './pages/LoggedIn';
import './App.css'
import UserContextProvider from "./contexts/UserContext";

function App() {
  return (
    <UserContextProvider >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<LoggedIn />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
