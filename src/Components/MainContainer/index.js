import { useSelector } from "react-redux";

export default function MainContainer({
    children,
}) {

    const theme = useSelector(
        (state) => state.app.theme
    );

    return (
        <div className={`${theme.background} ${theme.text}`}>
            {children}
        </div>
    )
}   