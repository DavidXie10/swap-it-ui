import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../../Components/PrivateRoute";
import Showcase from "../../Components/Showcase"
import Login from "../Login";
import ItemSelected from "../ItemSelected";

// //images, title, state, address, acquisition, description, onClickExchange
// const url_1 = 'https://www.gravatar.com/avatar/1d42ea6e005a4160211f7b1957ce0a09/?default=&s=64';
// let img = document.createElement("img");
// img.src = url_1;
const listImages = ['https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/ALAS-Messolongi-sea-salt-crystals-small.jpg', 'https://www.tresorsdegrece.gr/wp-content/uploads/2018/10/cherries-250g-small.jpg', 'https://www.tresorsdegrece.gr/wp-content/uploads/2022/03/carob-crackers.jpg']

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ItemSelected imagesSource={listImages} title={'Bicicleta con rodines'} owner={'Juani'} state={'usado'} address={'San José'} acquisition={'20/05/2021'} description={'La bici esta como nueva, tiene conos, aros nuevos, recién pintada de rojo, si no me va a dar su alma no me ofrezca nada'} />}/> 
                <Route element={<PrivateRoute />}>
                    <Route path="/showcase" element={<Showcase />}/> 
                </Route>
                {/*<Route path="/" element={<Home />} />*/}
            </Routes>
        </BrowserRouter>
    );
}