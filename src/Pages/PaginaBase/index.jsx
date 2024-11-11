import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import { Header } from "../../components/Header";

function PaginaBase(){
    return(
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
        </main>

    )
}

export default PaginaBase;