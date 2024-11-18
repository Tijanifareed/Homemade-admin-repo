import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../pages/LoginPage"

const router = createBrowserRouter([
     {
          path: "/",
          element: <App/>,
          children:[
               {
                    path: "",
                    element: <LoginPage/>
               }
          ]
     }
])
export default router