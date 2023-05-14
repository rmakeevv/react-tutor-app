import {Link, useRouteError} from "react-router-dom";

export const ErrorPage = () => {
    const error: any = useRouteError()
    return (
        <>
            <h1>Oops.. </h1>
            <p>Something went wrong</p>
            {error.message || error.status}
            <Link to={'/'}>GO BACK</Link>
        </>
    );
};