import Create from './pages/create'
import Home from './pages/home'
import CreatedSurveys from './pages/pastsurveys'

import {BrowserRouter,Route} from "react-router-dom";





function App() {
  return (
    <BrowserRouter>
      <div className="App">

      </div>

      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="create" element={<Blogs />} />
          <Route path="createdsurveys" element={<Contact />} />

        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
