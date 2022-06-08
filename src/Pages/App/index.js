import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../../Components/Header";
import Login from "../Login";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Header />}/> 
                <Route path="login" element={<Login />} />
                {/*<Route path="login" element={<Login />} />*/}
                {/*<Route path="/" element={<Home />} />*/}
            </Routes>
        </BrowserRouter>
    );
}