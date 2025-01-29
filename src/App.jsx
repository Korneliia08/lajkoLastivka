import "./App.scss";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import LogIn from "./views/LogIn/LogIn.jsx";
import AdminViewGuard from "./components/guards/AdminView.jsx";
import Admin from "./views/Admin/Admin.jsx";
import Marketplaces from "./views/Admin/Marketplace/Marketplaces.jsx";
import "react-toggle/style.css";
import "react-confirm-alert/src/react-confirm-alert.css";
import MarketplaceForm from "./views/Admin/Marketplace/MarketplaceForm/MarketplaceForm.jsx";
import PageFilter from "./views/PageFilter/PageFilter.jsx";
import { useEffect } from "react";
import Dashboard from "./views/Admin/dashboard/Dashboard.jsx";
import Statistics from "./views/Admin/statistics/Statistics.jsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Toaster } from "react-hot-toast";
import InformationOfMarket from "./views/Admin/informationOfMarket/InformationOfMarket.jsx";
import IsNotLoginGuard from "@/components/guards/IsNotLoginGuard.jsx";
import AddAndEditMarketPlace from "@/views/Admin/Marketplace/addAndEditMarketPlace/AddAndEditMarketPlace.jsx";

function App() {
  useEffect(() => {
    document.querySelector("#root").classList.remove("root");
  }, []);
  const router = createHashRouter([
    {
      path: "",
      element: (
        <IsNotLoginGuard>
          <LogIn />
        </IsNotLoginGuard>
      ),
    },
    {
      path: "admin",
      element: (
        <AdminViewGuard>
          <Admin />
        </AdminViewGuard>
      ),
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "marketplaces",
          element: <Marketplaces />,
        },

        {
          path: "marketplaces/:id",
          element: <InformationOfMarket />,
        },
        {
          path: "statistics",
          element: <Statistics />,
        },
        {
          path: "statistics/:id",
          element: <Statistics />,
        },

        {
          path: "marketplaces/editt/:id",
          element: <MarketplaceForm />,
        },
        {
          path: "marketplaces/edit/:id",
          element: <AddAndEditMarketPlace />,
        },
        {
          path: "",
          element: <Navigate to={"dashboard"} />,
        },
      ],
    },
    {
      path: "review/:secretId",
      element: <PageFilter />,
    },
    {
      path: "test/:id",
      element: <h1>test</h1>,
    },
  ]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div>
          <Toaster position="top-right" />
        </div>
        <RouterProvider router={router}></RouterProvider>
      </LocalizationProvider>
    </>
  );
}

export default App;
