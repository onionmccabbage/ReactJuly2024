import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root, { loader as rootLoader } from "./routes/root";
import NewSwapi, { action as newSwapiAction } from "./routes/new";
import Swapi, {
  loader as swapiLoader,
  action as swapiAction,
} from "./routes/swapi";
import SwapiList from "./routes/SwapiList";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "new",
        element: <NewSwapi />,
        action: newSwapiAction,
      },
      {
        path: "swapi/:category",
        element: <Swapi />,
        loader: swapiLoader,
        action: swapiAction,
        errorElement: <h2>Swapi not found</h2>,
      },
    ],
  }
]);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return <RouterProvider router={router} />;
}
