import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../../Components/PrivateRoute";
import Login from "../Login";
import ItemSelected from "../ItemSelected";
import Confirmation from "../Confirmation";
import Maintenance from "../Maintenance";
import ChooseExchangeProduct from "../ChooseExchangeProduct";
import Showcase from "../../Components/Showcase";
import ItemForm from "../ItemForm";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ChooseExchangeProduct />}/> 
                {/* <Route element={<PrivateRoute />}>
                    <Route path="/showcase" element={<Showcase />}/>
                    <Route path="/item/:id" element={<ItemForm />} /> 
                </Route> */}
            </Routes>
        </BrowserRouter>
    );
}