import Link from "next/link"

const NavBar = ({fatherState}) => {

    return(
        <nav>
            <h1>Esta es una barra de navegación</h1>
            <a href=""></a>
            <Link href="/contact">Link hacia algun lugar </Link>
        </nav>
    )

}

export default NavBar