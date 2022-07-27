import Create from './pages/create'
import Home from './pages/home'
import CreatedSurveys from './pages/pastsurveys'
import Nav from './components/Nav';

import {BrowserRouter,Route,Routes} from "react-router-dom";





function App() {
  return (
  <BrowserRouter>
    <Nav/>



    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path = 'created' element = {<></>}></Route>
      <Route></Route>
      <Route></Route>


    </Routes>
  
  </BrowserRouter>

  );
}

export default App;
