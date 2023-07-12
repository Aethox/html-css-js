const MainHeader = (props) => {
    return (
        <header>
            <p> texto aqui</p>
            {props.children}
        </header>
    )
}

export default MainHeader