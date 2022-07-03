import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../../Components/PrivateRoute";
import Profile from "../../Pages/Profile"
import Login from "../Login";
import ItemSelected from "../ItemSelected";
import Confirmation from "../Confirmation";
import Maintenance from "../Maintenance";
import ChooseExchangeProduct from "../ChooseExchangeProduct";
import ItemForm from "../ItemForm";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                {/*
                <Route path="/" element={<Catalog />}/>
                <Route path="/login" element={<Login />}/>*/}
                <Route element={<PrivateRoute />}>
                    <Route path="/item/:id" element={<ItemForm />} /> 
                    <Route path="/profile" element={<Profile />}/> 
                    <Route path="/chooseExchangeProduct" element={<ChooseExchangeProduct />}/>
                    <Route path="/confirmation" element={<Confirmation />}/>
                    <Route path="/myItems" element={<Maintenance />}/> 
                    <Route path="/catalog/item/:id" element={<ItemSelected />}/> 
                </Route>
            </Routes>
        </BrowserRouter>
    );
}