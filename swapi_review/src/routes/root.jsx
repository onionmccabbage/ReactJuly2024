import { useLoaderData, Link, Outlet } from "react-router-dom";
import { getSwapi } from "../swapiStore";

export async function loader() {
  return getSwapi();
}

export default function Root() {
  const swapis = useLoaderData();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ padding: "0 2rem", borderRight: "solid 1px #ccc" }}>
        <h1>Star Wars API</h1>
        <p>
          <Link to="new">Get Data</Link>
        </p>
        <pre>{JSON.stringify(swapis)}</pre>
        <ul>
          {/* {{swapis} && swapis.map((swapi) => (
            <li key={swapi.category}>
              <Link to={`/swapi/${swapi.category}`}>{swpi.category}</Link>
            </li>
          ))} */}
        </ul>
      </div>

      <div style={{ flex: 1, padding: "0 2rem" }}>
        <Outlet />
      </div>
    </div>
  );
}
