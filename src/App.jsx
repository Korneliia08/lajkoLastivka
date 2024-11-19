import './App.css'
import {createHashRouter, Navigate, RouterProvider} from "react-router-dom";
import LogIn from "./views/LogIn/LogIn.jsx";
import AdminViewGuard from "./components/guards/AdminView.jsx";
import Admin from "./views/Admin/Admin.jsx";
import Marketplaces from "./views/Admin/Marketplace/Marketplaces.jsx";
import "react-toggle/style.css"
import 'react-confirm-alert/src/react-confirm-alert.css';
import MarketplaceForm from "./views/Admin/Marketplace/MarketplaceForm/MarketplaceForm.jsx";
import PageFilter from "./views/PageFilter/PageFilter.jsx";
import {useEffect} from "react";

function App() {

    useEffect(() => {
        document.querySelector('#root').classList.remove('root')
    }, []);
    const router = createHashRouter([
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
                    path: "",
                    element: <Navigate to={"marketplaces"}/>
                }
            ],
        },
        {
            path: "review/:orderId/:itemId",
            element: <PageFilter/>

        },
        {
            path: "test/:id",
            element: <h1>test</h1>

        }]
    );

    return (
        <>
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App;
