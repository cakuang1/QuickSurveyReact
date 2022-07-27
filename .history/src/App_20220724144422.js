
import {ResponsiveAppBar} from './components/Nav/Nav';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./pages/home/home"
import Create from "./pages/create/create"
import CreatedSurveys from "./pages/pastsurveys/pastsurveys"
import Login from ""




function App() {
  return (
  <BrowserRouter>
    
    
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
