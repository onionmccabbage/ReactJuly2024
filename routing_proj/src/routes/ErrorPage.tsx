import { useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error:any = useRouteError()

    return (
        <>
            <aside>
                <h3>Problem</h3>
                <p>An unexpected error has occured</p>
                <p>{error.status} {error.message}</p>
            </aside>
        </>
    )
}