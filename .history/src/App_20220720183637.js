import Create from './pages/create'
import Home from './pages/home'
import CreatedSurveys from './pages/pastsurveys'

import {BrowserRouter,Route,Routes} from "react-router-dom";





function App() {
  return (
    <BrowserRouter>
      <div className="App">
        sdfsdfswef
      </div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="create" element={<Create />} />
          <Route path="createdsurveys" element={<CreatedSurveys />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
