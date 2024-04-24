import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHub from "./pages/MainHub";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import MyFavorites from "./pages/MyFavorites";
import MyGarage from "./pages/MyGarage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainHub />}>
            <Route index element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="favorites" element={<MyFavorites />} />
            <Route path="garage" element={<MyGarage />} />
            {/* <Route path="*" element={<NotFound />} />  TODO */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
