import { createBrowserRouter } from "react-router-dom";
import AdmincreateAccount from "../pages/admincreateaccount";
import Adminloginpage from "../pages/adminloginpage";
import Admindashboard from "../pages/admindashboard";
import App from "../App"


const router = createBrowserRouter([
     {
          path: "/",
          element: <App/>,
          Children: [
               {
                    path:"",
                    element:<Adminloginpage/>
               },
               {
                    path: "/dashboard",
                    element: <Admindashboard/>
               },
               {
                    path: "createnewaccount",
                    element: <AdmincreateAccount/>
               }
          ]
          
     }
])