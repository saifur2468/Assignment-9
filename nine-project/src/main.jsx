import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from "./AllComponent/MainLayout/MainLayout";
import Brands from "./AllComponent/Brands/Brands";
import MyProfile from "./AllComponent/MyProfile/MyProfile";
import Home from "./AllComponent/Home/Home";
import TopBrandsDetalies from "./AllComponent/TopBrandsDetalies/TopBrandsDetalies";
import Error from "./AllComponent/Error/Error";
import { AuthProvider } from "./AllComponent/AuthSection/AuthoProvider"; 
import PrivateRoute from "./AllComponent/PrivateRoute/PrivateRoute"; 
import CouponsPage from "./AllComponent/CouponsPage/CouponsPage";
import Login from "./AllComponent/LoginAndSignUp/Login";
import Signup from "./AllComponent/LoginAndSignUp/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "Brands",
        element: <Brands />
      },
      {
        path: "my-profile",
        element: <MyProfile />
      },
      {
        path:"/login",
        element:<Login></Login>

      },
     {
      path:"/signup",
      element:<Signup></Signup>
     },
       
      {
        path:"my-profile",
        element:(
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>

        )

      },
      {
        path:"/coupons/:brand_name",
        element:<PrivateRoute>
          <CouponsPage></CouponsPage> 
        </PrivateRoute>

      },

      
     
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <TopBrandsDetalies />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch('/Cloth.json');
          const data = await res.json();
          const singleData = data.find(d => d.id == params.id);
          return singleData;
        }
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
