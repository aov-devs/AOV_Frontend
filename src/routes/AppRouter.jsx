import { Navigate, useRoutes, Outlet } from 'react-router-dom';
import useAuth from '../context/AuthContext';

// layouts
import MainLayout from 'src/layouts/Main';

import HomePage from 'src/pages/Home';
import NotFoundPage from 'src/pages/NotFound';

import ContentPage from 'src/pages/Content';
import AddContentPage from 'src/pages/AddContent';

import BookPage from 'src/pages/Book';
import EmailVerifiedPage from 'src/pages/EmailVerified';


export default function AppRouter() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: 'contents/demo', element: <ContentPage /> },
        { path: 'contents/new', element: <AddContentPage clear={true}/> },
        { path: 'contents/mock', element: <AddContentPage /> },
        { path: '404', element: <NotFoundPage /> },
        {
          path: '/',
          element: <AnonymousRoute />,
          children: [
            { path: 'login', element: <BookPage /> },
            { path: 'register', element: <BookPage /> },
            { path: '/accounts/confirm-email/:token', element: <EmailVerifiedPage /> },
          ],
        },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

const AnonymousRoute = () => {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }
  return <Outlet />;
};

const UserRoute = () => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
