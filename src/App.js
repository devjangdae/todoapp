import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Main from './pages/Main';
import View from './pages/View';
import Create from './pages/Create';
import Update from './pages/Update';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/view/:id" element={<View />} />
      <Route path="/create" element={<Create />} />
      <Route path="/update" element={<Update />} />
      <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
}

export default App;
