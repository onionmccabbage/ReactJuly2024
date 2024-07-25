import { Link, Outlet } from "react-router-dom"

function Root(){
    return (
        <>
        <h3>The Root Path ('\')</h3>
        {/*careful: using <a> will refresh the page */}
        {/* <a href='./about'>About</a> */}
        {/* we tend to usev Link instead of <a> */}
        <Link to={'/about'}>About</Link>

        <aside>
            {/* outlet is used for child routing */}
            <Outlet />
        </aside>

        </>
    )
}
export default Root