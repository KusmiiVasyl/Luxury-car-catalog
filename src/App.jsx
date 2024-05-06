import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHub from "./pages/MainHub";
import Home from "./pages/Home";
import MyFavorites from "./pages/MyFavorites";
import MyGarage from "./pages/MyGarage";
import Brands from "./pages/Brands";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainHub />}>
            <Route index element={<Home />} />
            <Route path="brands" element={<Brands />} />
            <Route path="favorites" element={<MyFavorites />} />
            <Route path="garage" element={<MyGarage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
