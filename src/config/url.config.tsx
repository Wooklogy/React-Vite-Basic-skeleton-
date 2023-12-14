import { createBrowserRouter } from "react-router-dom";
import PageIndex from "../pages";

const constPageRouters = createBrowserRouter([
    {
        path: "/",
        element: <PageIndex />
    }
]);

export default constPageRouters;