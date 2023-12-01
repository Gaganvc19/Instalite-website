import TopBar from "./Components/TopBar/TopBar";
import Post from "./Components/post/Post";
import Home from "./Pages/home/Home";
import Single from "./Pages/home/single/Single";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/settings/Settings";
import Write from "./Pages/write/Write";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>
        <Route path="/write" element={user ? <Write /> : <Register />}></Route>
        <Route path="/settings" element={user ? <Settings /> : <Register />}></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
