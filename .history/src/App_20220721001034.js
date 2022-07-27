import Create from './pages/create'
import Home from './pages/home'
import CreatedSurveys from './pages/pastsurveys'
import Nav from './components/Nav';
import Login from "./"

import {BrowserRouter,Route,Routes} from "react-router-dom";





function App() {
  return (
  <BrowserRouter>
    <Nav/>



    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path = 'create' element = {<Create/>}></Route>
      <Route path = 'created' element = {<CreatedSurveys/>}></Route>
      <Route path = 'login' element = {</>}></Route>
    </Routes>
  
  </BrowserRouter>

  );
}

export default App;
