import Create from './pages/create/create'
import Home from './pages/home/home'
import CreatedSurveys from './pages/pastsurveys'
import Nav from './components/Nav/Nav';
import Login from "./pages/login"

import {BrowserRouter,Route,Routes} from "react-router-dom";





function App() {
  return (
  <BrowserRouter>
    <Nav/>



    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path = 'create' element = {<Create/>}></Route>
      <Route path = 'created' element = {<CreatedSurveys/>}></Route>
      <Route path = 'login' element = {<Login/>}></Route>
    </Routes>
  
  </BrowserRouter>

  );
}

export default App;
