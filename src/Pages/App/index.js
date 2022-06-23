import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../../Components/PrivateRoute";
import Showcase from "../../Components/Showcase"
import Login from "../Login";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Showcase />}/> 
                <Route element={<PrivateRoute />}>
                    <Route path="/showcase" element={<Showcase />}/> 
                </Route>
                {/*<Route path="/" element={<Home />} />*/}
            </Routes>
        </BrowserRouter>
    );
}