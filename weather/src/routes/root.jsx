import { useLoaderData, Link, Outlet } from "react-router-dom";
import { getWeathers } from "../weatherStore";

export async function loader() {
  return getWeathers();
}

export default function Root() {
  const weathers = useLoaderData();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ padding: "0 2rem", borderRight: "solid 1px #ccc" }}>
        <h1>Weather Reports</h1>
        <p>
          <Link to="new">Create Weather Report</Link>
        </p>
        <ul>
          {weathers.map((weather) => (
            <li key={weather.city}>
              <Link to={`/weather/${weather.city}`}>{weather.city}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1, padding: "0 2rem" }}>
        <Outlet />
      </div>
    </div>
  );
}
