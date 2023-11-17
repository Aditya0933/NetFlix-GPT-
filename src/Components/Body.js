import LoginPage from "./LoginPage"
import Browse from "./Browse"
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Login from "./LoginPage"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import {auth} from "../Utils/Firebase"
import {onAuthStateChanged} from "firebase/auth"
import {addUser, removeUser} from "../Utils/userSlice"

const Body = () =>{
    const dispatch = useDispatch();

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

    useEffect( () => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
              // ...
            } else {
                dispatch(removeUser());
              // ...
            }
          });
    }, [])

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body;