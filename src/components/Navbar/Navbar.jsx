import "./navbar.css";

const Navbar = () => {  
  return (
    <div className="navbar" >
        <div className="navbar-logo">
            <h3>Ma<span>c</span></h3>
        </div>
        <div className="navbar-info-section-mid">
                <div>
                    <a>Home</a>
                </div>
                <div>
                    <a>About Us</a>
                </div>
                <div>
                    <a>Portfolio</a>
                </div>
                <div>
                    <a>Services</a>
                </div>
                <div>
                    <a>Gallery</a>
                </div>
                <div>
                    <a>Contact Us</a>
                </div>
        </div>
        <div className="navbar-info-section">
            <div className="button button-small button-blue" >
                    Let's Talk                      
            </div>  
        </div>
        </div>
  )
}

export default Navbar;