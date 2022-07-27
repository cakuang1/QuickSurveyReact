import Create from './pages/create'
import Home from './pages/home'
import CreatedSurveys from './pages/pastsurveys'

import {BrowserRouter,Route,Routes} from "react-router-dom";





function App() {
  return (
    <>
    <div className="App">
      sdfsdfswef
    </div>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<div>testing</div>} />
          <Route path="create" element={<Create />} />
          <Route path="createdsurveys" element={<CreatedSurveys />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
