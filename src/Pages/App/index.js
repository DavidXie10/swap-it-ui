import { BrowserRouter, Route, Routes } from "react-router-dom";
import Showcase from "../../Components/Showcase"
import Login from "../Login";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Showcase />}/> 
                <Route path="login" element={<Login />} />
                {/*<Route path="login" element={<Login />} />*/}
                {/*<Route path="/" element={<Home />} />*/}
            </Routes>
        </BrowserRouter>
    );
}