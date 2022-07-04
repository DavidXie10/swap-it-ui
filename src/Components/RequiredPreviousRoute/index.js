import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function RequiredPreviousRoute({ children, redirectPath = "/catalog", checkPrevious = ''}) {
    const itemToReceive = useSelector ((state) => state.exchangeItem.itemToReceive);
    const itemsToGive = useSelector ((state) => state.exchangeItem.itemsToGive);

    if (!itemToReceive) {
        return <Navigate to={redirectPath} replace />;
    }

    if(checkPrevious === 'chooseExchangeProduct'){
        if(itemsToGive.length === 0){
            redirectPath = '/chooseExchangeProduct';
            return <Navigate to={redirectPath} replace />;
        }
    }
 
    return children || <Outlet />;
}
