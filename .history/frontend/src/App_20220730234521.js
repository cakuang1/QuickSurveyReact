
import Navigation from './components/Nav/Nav';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./pages/home/home"
import Create from "./pages/create/create"
import CreatedSurveys from "./pages/pastsurveys/pastsurveys"
import LogRegi from "./pages/login/login"
import Register from "./pages/register/register"
import { useEffect, useState } from 'react';




function App() {
  const [user,setUser] = useState(null)

  console.log('test')


  return (
  <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path = 'create' element = {<Create/>}></Route>
      <Route path = 'created' element = {<CreatedSurveys/>}></Route>
      <Route path = 'login' element = {<LogRegi change = {set}>></Route>
      <Route path = 'register' element = {<Register/>}></Route>
    </Routes>
  
  </BrowserRouter>

  );
}

export default App;
