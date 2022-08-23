import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import useAuth from '../context/AuthContext';
import HomePage from 'src/pages/HomePage';
import NotFoundPage from 'src/pages/NotFoundPage';

import ContentPage from 'src/pages/ContentPage';
import AddContentPage from 'src/pages/AddContentPage';

import LoginRegisterPage from 'src/pages/LoginRegisterPage';
import EmailVerifiedPage from 'src/pages/EmailVerifiedPage';

import DashboardPage from 'src/pages/DashboardPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contents/demo" element={<ContentPage />} />
        <Route path="/contents/new" element={<AddContentPage clear={true} />} />
        <Route path="/contents/mock" element={<AddContentPage />} />
        <Route
          path="/login"
          element={
            <AnonymousRoute>
              <LoginRegisterPage />
            </AnonymousRoute>
          }
        />
        <Route
          path="/register"
          element={
            <AnonymousRoute>
              <LoginRegisterPage />
            </AnonymousRoute>
          }
        />
        <Route
          path="/accounts/confirm-email/:token"
          element={
            <AnonymousRoute>
              <EmailVerifiedPage />
            </AnonymousRoute>
          }
        />
        <Route
          path="*"
          element={
            <UserRoute>
              {' '}
              <DashboardPage />
            </UserRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const AnonymousRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

const UserRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default AppRouter;
