import App from './App'
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage />
  },
]);


export default router;
