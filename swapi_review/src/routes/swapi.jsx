import { useLoaderData, Form, redirect } from "react-router-dom";
import { deleteSwapi, getSwapi } from "../swapiStore";
import SwapiList from "./SwapiList";

export default function Swapi() {
  const swapi = useLoaderData();
  return (
    <div>
      <h2>{swapi.category}</h2>
      <div>{swapi.id}</div>
      <SwapiList category={swapi.category} id={swapi.id} name={swapi.name} />
      <Form method="post" style={{ marginTop: "2rem" }}>
        <button type="submit">Delete</button>
      </Form>
    </div>
  );
}

export async function loader({ params }) {
  const swapi = await getSwapi(params.category);
  if (!swapi) throw new Response("", { status: 404 });
  return swapi;
}

export async function action({ params }) {
  await deleteWeather(params.category);
  return redirect("/new");
}
