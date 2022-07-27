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
          <Route path="" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
