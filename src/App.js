import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import View from "./pages/View";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Practice from "./pages/Practice";

import "antd/dist/reset.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/view/:id" element={<View />} />
      <Route path="/create" element={<Create />} />
      <Route path="/update/:id" element={<Update />} />
      <Route path="/practice" element={<Practice />} />
      <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
}

export default App;
