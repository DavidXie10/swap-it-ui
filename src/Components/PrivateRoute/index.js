import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { logout } from '../../Slices/user/userSlice';	

export default function PrivateRoute({ children, redirectPath = "/"}) {
    const userState = useSelector((state) => state.user);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();	

    if (!isLoggedIn) {
        return <Navigate to={redirectPath} replace />;
    }

    try {
        const decryptedToken = jwtDecode(userState.user.token);
        const dateNow = new Date();
        if (decryptedToken.exp * 1000 < dateNow.getTime()) {
            // TODO: change route to default when token expire
            dispatch(logout());
            return <Navigate to={redirectPath} replace />;
        }
    } catch (error) {
        return <Navigate to={redirectPath} replace />;
    }

    return children || <Outlet />;
}
