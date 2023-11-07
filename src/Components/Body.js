import LoginPage from "./LoginPage"
import Browse from "./Browse"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./LoginPage"
import Error from "./Error"

const Body = () =>{

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>,
        },
        {
            path: "/browse",
            element: <Browse/>
        },
    ])

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;