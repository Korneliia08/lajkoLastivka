import './App.css'
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import LogIn from "./views/LogIn/LogIn.jsx";
import AdminViewGuard from "./components/guards/AdminView.jsx";
import Admin from "./views/Admin/Admin.jsx";
import Marketplaces from "./views/Admin/Marketplace/Marketplaces.jsx";
import "react-toggle/style.css"
import MarketplaceForm from "./views/Admin/Marketplace/MarketplaceForm/MarketplaceForm.jsx";

function App() {
    const router = createBrowserRouter([
            {
                path: "",
                element: <LogIn/>
            },
            {
                path: "admin",
                element: <AdminViewGuard><Admin/></AdminViewGuard>,
                children: [
                    {
                        path: "marketplaces",
                        element: <Marketplaces/>
                    },
                    {
                        path: "marketplaces/:id",
                        element: <MarketplaceForm/>
                    },
                    {
                        path: "*",
                        element: <Navigate to={"marketplaces"}/>
                    }
                ],
            }
        ]
    );

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App;
