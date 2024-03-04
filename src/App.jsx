import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Album from "./Album[id].jsx";
import Provider from "./Contex/AlbumContex.jsx";

function App() {
  return (
    <>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/album/:id" element={<Album />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
