import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../../Components/PrivateRoute";
<<<<<<< HEAD
import Showcase from "../../Components/Showcase"
import Profile from "../../Pages/Profile"
=======
>>>>>>> develop
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
                <Route path="/" element={<ItemSelected />}/>
                <Route path="/e" element={<ChooseExchangeProduct />}/>
                <Route path="/c" element={<Confirmation />}/>
                <Route path="/m" element={<Maintenance />}/> 
                {/* <Route element={<PrivateRoute />}>
                    <Route path="/showcase" element={<Showcase />}/>
                    <Route path="/item/:id" element={<ItemForm />} /> 
                    <Route path="/profile" element={<Profile />}/> 
                </Route>
                </Route> */}
            </Routes>
        </BrowserRouter>
    );
}