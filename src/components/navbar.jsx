import React from 'react'

const Navbar = () => {

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const offset = element.offsetTop - navbarHeight;
      
        setTimeout(() => {
            window.scrollTo({
                top: offset,
            });
        }, 0);
    };
      
      
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top" id='navbar'>
            <div className="container">
                <a href="#intro" onClick={() => scrollToElement('intro')} 
                className="navbar-brand" id="nav-header">
                    Portfolio
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                >
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#projects" onClick={() => scrollToElement('projects')} className="nav-link" id="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" onClick={() => scrollToElement('about')} className="nav-link" id="nav-link">About</a>
                        </li>             
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar