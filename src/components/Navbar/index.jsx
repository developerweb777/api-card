import "./index.scss"
const Navbar = ()=>{
    return <>
    <header className="header" >
        <nav className="header_nav container">
            <h2 className="header_nav_h2">Logo</h2>
            <ul className="header_nav_ul">
                <li className="header_nav_ul_li">link1</li>
                <li className="header_nav_ul_li">link2</li>
                <li className="header_nav_ul_li">link3</li>
                <li className="header_nav_ul_li">link4</li>
            </ul>
        </nav>
    </header>
    </>
}
export default Navbar;