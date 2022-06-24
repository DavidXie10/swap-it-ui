import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '../../Components/PrivateRoute';
import Showcase from '../../Components/Showcase';
import Login from '../Login';
import Catalog from '../Catalog';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}/> 
                <Route element={<PrivateRoute />}>
                    <Route path='/showcase' element={<Showcase />}/> 
                </Route>
                <Route path='/catalog' element={<Catalog />} />
            </Routes>
        </BrowserRouter>
    );
}