import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "src/pages/HomePage";
import ContentPage from "src/pages/ContentPage";
import AddContentPage from "src/pages/AddContentPage";
import LoginPage from "src/pages/LoginPage";
import NotFoundPage from "src/pages/NotFoundPage";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contents/demo" element={<ContentPage />} />
        <Route path="/contents/new" element={<AddContentPage clear={true} />} />
        <Route path="/contents/mock" element={<AddContentPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
