import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Dashboard from "./pages/users/Dashboard";
import Protected from "./components/Protected";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/"
          element={
            <Protected>
              <Home />
            </Protected>
          }
        />
        <Route
          path="/users/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;

// import { GoogleOAuthProvider } from "@react-oauth/google";
//  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}> 
//  </GoogleOAuthProvider> 

// 59994587206-9j7k0vp5faupimsn3ik2a1vf0uc9l1m1.apps.googleusercontent.com


