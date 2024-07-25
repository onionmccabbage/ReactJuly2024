import { useLoaderData, Form, redirect } from "react-router-dom";
import { deleteWeather, getWeather } from "../weatherStore";
import WeatherList from "./WeatherList";

export default function Weather() {
  const weather = useLoaderData();
  return (
    <div>
      <h2>{weather.city}</h2>
      <div>{weather.country}</div>
      <WeatherList city={weather.city} country={weather.country} />
      <Form method="post" style={{ marginTop: "2rem" }}>
        <button type="submit">Delete</button>
      </Form>
    </div>
  );
}

export async function loader({ params }) {
  const weather = await getWeather(params.city);
  if (!weather) throw new Response("", { status: 404 });
  return weather;
}

export async function action({ params }) {
  await deleteWeather(params.city);
  return redirect("/new");
}
