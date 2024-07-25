import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root, { loader as rootLoader } from "./routes/root";
import NewWeather, { action as newWeatherAction } from "./routes/new";
import Weather, {
  loader as weatherLoader,
  action as weatherAction,
} from "./routes/weather";
import WeatherList from "./routes/WeatherList";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "new",
        element: <NewWeather />,
        action: newWeatherAction,
      },
      {
        path: "weather/:city",
        element: <Weather />,
        loader: weatherLoader,
        action: weatherAction,
        errorElement: <h2>Weather not found</h2>,
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
