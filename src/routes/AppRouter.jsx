import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContentPage from "../pages/ContentPage";
import AddContentPage from "../pages/AddContentPage";
import NotFoundPage from "../pages/NotFoundPage";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/contents/:id" element={<ContentPage />}/>
        <Route path="/contents/new" element={<AddContentPage />}/>

        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
