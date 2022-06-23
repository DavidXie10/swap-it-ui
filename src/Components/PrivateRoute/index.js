import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ children, redirectPath = "/"}) {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    if (!isLoggedIn) {
        return <Navigate to={redirectPath} replace />;
    }

    return children || <Outlet />;
}
