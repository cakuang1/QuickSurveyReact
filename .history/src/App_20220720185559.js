import Create from './pages/create'
import Home from './pages/home'
import CreatedSurveys from './pages/pastsurveys'

import {BrowserRouter,Route,Routes} from "react-router-dom";





function App() {
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<div>testing</div>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
