import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../../Components/PrivateRoute";
import Login from "../Login";
import ItemSelected from "../ItemSelected";
import Confirmation from "../Confirmation";
import Maintenance from "../Maintenance";
import ChooseExchangeProduct from "../ChooseExchangeProduct";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ChooseExchangeProduct/>}/> 
                <Route element={<PrivateRoute />}>
                </Route>
                {/*<Route path="/" element={<Home />} />*/}
            </Routes>
        </BrowserRouter>
    );
}