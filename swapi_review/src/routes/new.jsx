import { Form, redirect } from "react-router-dom";
import { createSwapi } from "../swapiStore";

export default function NewSwapi() {
  return (
    <Form method="post">
      <p>
        <label>Category
          <input type="text" name="category"
            required placeholder="Enter Category" />
        </label>
      </p>
      <p>
        <label >ID
          <input name="id" id="id"
            type="number" min={0} max={12}
            required placeholder="Enter id" />
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
  const swapi = await createSwapi({
    category: formData.get("category"),
    id: formData.get("id"),
  });
  
  return redirect(`/swapi/${swapi.category}`);
}
