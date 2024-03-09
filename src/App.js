import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from "./pages/NotFound"
import Login from "./pages/Login"
import Home from "./pages/Home"


function App() {
  return (
    <BrowserRouter basename='/web'>
        <Routes>
          <Route path={'/login'} element={page(<Login/>)}></Route>
          <Route path='/' element={page(<Home/>)}></Route>
          <Route path={'*'} element={<NotFound/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

function page(element){
  if (element == <Login/>){
    return <Login/>
  }
  if (loggedIn()) {
    return element;
  } else{
    return <Navigate to={"/login"}></Navigate>
  }
}

function loggedIn(){
  return true;
}

export default App;
