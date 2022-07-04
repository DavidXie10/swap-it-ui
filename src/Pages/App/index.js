import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../../Components/PrivateRoute";
import Profile from "../../Pages/Profile"
import Login from "../Login";
import ItemSelected from "../ItemSelected";
import Confirmation from "../Confirmation";
import Maintenance from "../Maintenance";
import ChooseExchangeProduct from "../ChooseExchangeProduct";
import ItemForm from "../ItemForm";
import RequiredPreviousRoute from "../../Components/RequiredPreviousRoute";
import Catalog from '../Catalog';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Catalog />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/item/:id" element={<ItemSelected />}/> 
                <Route element={<PrivateRoute />}>
                    <Route path="/form/item/:id" element={<ItemForm />} /> 
                    <Route path="/profile" element={<Profile />}/> 
                    <Route path="/myItems" element={<Maintenance />}/> 
                    <Route element={<RequiredPreviousRoute />}>
                        <Route path="/item/:id/chooseExchangeProduct" element={<ChooseExchangeProduct />}/>
                    </Route>
                    <Route element={<RequiredPreviousRoute checkPrevious={'chooseExchangeProduct'} />}>
                        <Route path="/item/:id/chooseExchangeProduct/confirmation" element={<Confirmation />}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}