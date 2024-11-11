import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaBase from "./Pages/PaginaBase";
import Corpo from "./Pages/Corpo";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Corpo />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;