import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"


function App() {
  return (
    <BrowserRouter basename='/web'>
        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
    
          <Route path={'*'} element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
