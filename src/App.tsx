import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate
} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
