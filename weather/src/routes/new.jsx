import { Form, redirect } from "react-router-dom";
import { createWeather } from "../weatherStore";

////////////////////////////////////////////////////////////////////////////////
export default function NewWeather() {
  return (
    <Form method="post">
      <p>
        <label>City 
          <input type="text" name="city" 
            required placeholder="Enter City name"/>
        </label>
      </p>
      <p>
        <label >Country
        <input name="country" id="country"
           required placeholder="Enter Country name" />
        </label>
        <br />
      </p>
      <p>
        <button type="submit">Go</button>
      </p>
    </Form>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const weather = await createWeather({
    city: formData.get("city"),
    country: formData.get("country"),
  });
  return redirect(`/weather/${weather.city}`);
}
