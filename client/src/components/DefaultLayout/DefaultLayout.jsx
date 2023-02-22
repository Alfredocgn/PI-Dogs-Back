import NavBar from "../NavBar/NavBar"


const DefaultLayout = ({children}) =>{
    return(
        <>
        <NavBar/>
        {children}
        <footer>This is footer</footer>

        </>

    )
}

export default DefaultLayout;