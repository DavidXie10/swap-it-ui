import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../../Components/PrivateRoute";
import Showcase from "../../Components/Showcase"
import Login from "../Login";
import NewItemForm from "../NewItemForm";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/> 
                <Route element={<PrivateRoute />}>
                    <Route path="/showcase" element={<Showcase />}/> 
                </Route>
                <Route path="/newItem" element={<NewItemForm />} />
            </Routes>
        </BrowserRouter>
    );
}