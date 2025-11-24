
import { createBrowserRouter } from "react-router";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import EstadisticaPage from "./pages/EstadisticaPage";
import loderEstadistica from "./db/estadistica/loderEstadistica";
import FinalPage from "./pages/FinalPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/estadistica/:nPregunta",
    element: <EstadisticaPage />,
    loader: loderEstadistica,
    errorElement: <FinalPage />,
  },

])


export default router;