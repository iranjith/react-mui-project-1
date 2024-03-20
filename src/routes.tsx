import App from './App'
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';
import Authentication from './pages/Authentication';
import Database from './pages/Database';
import Functions from './pages/Functions';
import Hosting from './pages/Hosting';
import MachineLearning from './pages/MachineLearning';
import StoragePage from './pages/Storage';
import Layout from './pages/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<ErrorPage />,
    children: [
      {
        path: "/authentication",
        element: <Authentication />,
        errorElement:<ErrorPage />
      },
      {
        path: "/database",
        element: <Database />,
        errorElement:<ErrorPage />
      },
      {
        path: "/functions",
        element: <Functions />,
        errorElement:<ErrorPage />
      },
      {
        path: "/hosting",
        element: <Hosting/>,
        errorElement:<ErrorPage />
      },
      {
        path: "/machine-learning",
        element: <MachineLearning />,
        errorElement:<ErrorPage />
      },
      {
        path: "/storage",
        element: <StoragePage />,
        errorElement:<ErrorPage />
      }]
  }
  
  
]);


export default router;
