import ReactDom from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Show from "./Show";
import Info from "./Info";

ReactDom.render(
  <div>
    <Router>
      <App />
      <Routes>
        <Route path="/show" element={<Show />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </Router>
  </div>,
  document.getElementById("root")
);
